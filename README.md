# Metalúrgica Marinox

Site institucional da **Metalúrgica Marinox**, voltado à apresentação de soluções em estruturas metálicas, esquadrias e artefatos de metal, portfólio de projetos e solicitação de orçamentos.

## Endereços e publicação

- **Domínio oficial (em migração):** https://www.marinoxmetalurgica.com.br
- **Hospedagem:** GitHub Pages, com deploy via GitHub Actions.
- **Branch de produção:** `main`.
- **Branch de preparação do domínio:** `preparacao-dominio-oficial` (não publicar antes da validação e da configuração DNS).
- **Domínio alternativo:** `marinoxmetalurgica.com.br`, previsto para redirecionar ao endereço com `www`.

> A migração depende da configuração dos registros DNS no Registro.br, da validação do GitHub Pages e da disponibilidade do HTTPS. A presença do domínio neste README não significa que a migração já esteja concluída.

## Tecnologias

- React e TypeScript
- Vinext (compatibilidade com App Router do Next.js)
- Tailwind CSS
- Componentes de interface baseados em shadcn/Base UI
- Exportação estática personalizada para GitHub Pages

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior e npm.

```bash
npm ci
npm run dev
```

## Validação e exportação

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm run build:pages
```

O script `build:pages` gera o artefato estático em `pages-dist/`, incluindo as rotas exportadas e os recursos necessários à publicação. A configuração de produção para o domínio oficial utiliza a raiz do endereço, **sem** o antigo prefixo `/marinox`.

Na branch de migração, o exportador também prepara:

- `CNAME`: identifica `www.marinoxmetalurgica.com.br`;
- `sitemap.xml`: lista as páginas exportadas;
- `robots.txt`: indica as regras de rastreamento e o sitemap.

O workflow em `.github/workflows/pages.yml` é responsável pela publicação no GitHub Pages. Não altere a fonte de publicação para deploy por branch: a opção esperada em **Settings → Pages → Build and deployment** é **GitHub Actions**.

## Estrutura principal

| Caminho | Finalidade |
| --- | --- |
| `app/` | Páginas, layouts e estilos |
| `components/` | Componentes compartilhados e formulário |
| `lib/site-data.ts` | Informações centralizadas de contato |
| `public/marinox-assets/` | Fotografias, logotipos e outros recursos visuais |
| `scripts/export-pages.mjs` | Exportação das rotas para hospedagem estática |
| `.github/workflows/` | Validação e publicação automatizadas |

## Contato e formulário

O formulário de contato prepara uma mensagem personalizada para o WhatsApp da Marinox, **(21) 97015-9565**. O visitante revisa e confirma o envio no WhatsApp; o site não possui backend de envio de e-mails para esse formulário.

E-mail de contato: **marivaldojalmeida@gmail.com**.

## Cuidados de manutenção

- Preserve as fotografias, logomarcas e textos institucionais aprovados.
- Não publique credenciais ou arquivos `.env` no repositório ou em `pages-dist/`.
- Antes de modificar DNS, confira possíveis registros de e-mail (MX/TXT).
- Após a migração, valide HTTPS, navegação, imagens, formulário, `robots.txt`, `sitemap.xml` e indexação no Google Search Console.
- Informações institucionais e projetos devem permanecer baseados em dados confirmados pelo cliente.
