import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://marinox-metalurgica.tuned-civet-0855.chatgpt.site/sitemap.xml',
  };
}
