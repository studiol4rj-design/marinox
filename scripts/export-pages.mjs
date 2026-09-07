import { cp, mkdir, rm, writeFile, access, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const clientDir = path.join(root, 'dist', 'client');
const outputDir = path.join(root, 'pages-dist');
const port = 8787;
const origin = `http://127.0.0.1:${port}`;
const basePath = '/marinox';

const routes = [
  '/',
  '/a-marinox/',
  '/solucoes/',
  '/projetos/',
  '/projetos/mobiliarios-estruturas-restaurante/',
  '/projetos/corrimao-guarda-corpo/',
  '/projetos/cobertura-portas/',
  '/conteudo/',
  '/conteudo/como-preparar-um-orcamento-de-estrutura-metalica/',
  '/conteudo/execucao-de-projetos-metalicos-com-prazo-e-qualidade/',
  '/contato/',
  '/faq/',
  '/politica-de-privacidade/',
  '/termos-de-uso/',
];

async function exists(target) {
  try {
    await access(target, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function waitForServer() {
  const deadline = Date.now() + 45_000;
  let lastErrorMessage = 'timeout';

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${origin}${basePath}/`, { redirect: 'manual' });
      if (response.status > 0) return;
    } catch (error) {
      lastErrorMessage = error instanceof Error ? error.message : 'erro desconhecido';
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Servidor de prerender nao respondeu a tempo: ${lastErrorMessage}`);
}

function outputFileForRoute(route) {
  if (route === '/') return path.join(outputDir, 'index.html');
  return path.join(outputDir, route.replace(/^\//, ''), 'index.html');
}

function normalizePublicAssetUrls(html) {
  return html.replaceAll('/marinox-assets/', `${basePath}/marinox-assets/`);
}

async function renderRoute(route) {
  const url = `${origin}${basePath}${route}`;
  const response = await fetch(url, { redirect: 'follow' });
  let html = await response.text();

  if (!response.ok) {
    throw new Error(`Falha ao renderizar ${route}: HTTP ${response.status}`);
  }

  if (!/<html[\s>]/i.test(html)) {
    throw new Error(`Resposta de ${route} nao parece ser HTML valido.`);
  }

  html = normalizePublicAssetUrls(html);

  const destination = outputFileForRoute(route);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html, 'utf8');
  console.log(`Exportado ${route}`);
}

async function flattenBasePathAssets() {
  const nestedBasePathDir = path.join(outputDir, basePath.replace(/^\//, ''));
  if (!(await exists(nestedBasePathDir))) return;

  const entries = await readdir(nestedBasePathDir, { withFileTypes: true });
  for (const entry of entries) {
    const source = path.join(nestedBasePathDir, entry.name);
    const destination = path.join(outputDir, entry.name);
    await cp(source, destination, { recursive: true, force: true });
  }

  await rm(nestedBasePathDir, { recursive: true, force: true });
}

async function stopServer(server) {
  if (server.exitCode !== null) return;

  server.kill('SIGTERM');
  const exited = await Promise.race([
    new Promise((resolve) => server.once('exit', () => resolve(true))),
    new Promise((resolve) => setTimeout(() => resolve(false), 2_000)),
  ]);

  if (!exited && server.exitCode === null) {
    server.kill('SIGKILL');
  }

  server.stdout?.destroy();
  server.stderr?.destroy();
}

if (!(await exists(clientDir))) {
  throw new Error('dist/client nao existe. Execute npm run build antes de npm run build:pages.');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });
await flattenBasePathAssets();

const wranglerScript = path.join(root, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
const server = spawn(
  process.execPath,
  [wranglerScript, 'dev', '--config', 'dist/server/wrangler.json', '--port', String(port), '--local'],
  {
    cwd: root,
    env: { ...process.env, GITHUB_PAGES_DEPLOY: 'true' },
    stdio: ['ignore', 'pipe', 'pipe'],
  },
);

server.stdout.on('data', (chunk) => process.stdout.write(`[wrangler] ${chunk}`));
server.stderr.on('data', (chunk) => process.stderr.write(`[wrangler] ${chunk}`));

try {
  await waitForServer();

  for (const route of routes) {
    await renderRoute(route);
  }

  await writeFile(path.join(outputDir, '.nojekyll'), '', 'utf8');

  const indexPath = path.join(outputDir, 'index.html');
  const cssDir = path.join(outputDir, '_next', 'static', 'css');
  if (!(await exists(indexPath))) {
    throw new Error('Export final invalido: pages-dist/index.html nao foi gerado.');
  }
  if (!(await exists(cssDir))) {
    throw new Error('Export final invalido: assets CSS nao foram publicados na raiz esperada.');
  }

  console.log(`Export concluido: ${routes.length} rotas em pages-dist.`);
} finally {
  await stopServer(server);
}
