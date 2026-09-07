import type { MetadataRoute } from 'next';
import { articles, projects } from '@/lib/site-data';

const baseUrl = 'https://marinox-metalurgica.tuned-civet-0855.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/a-marinox', '/solucoes', '/projetos', '/conteudo', '/faq', '/contato'];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${baseUrl}/projetos/${project.slug}`, lastModified: new Date() })),
    ...articles.map((article) => ({ url: `${baseUrl}/conteudo/${article.slug}`, lastModified: new Date() })),
  ];
}
