import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/lib/site-data';

export function ArticleDetailPage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;

  return (
    <>
      <SiteHeader />
      <main className="bg-white px-5 py-16 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <Badge className="bg-red-50 text-red-800 hover:bg-red-50">{article.category}</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">{article.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-700">
            {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link href="/contato" className="mt-10 inline-flex items-center gap-2 font-semibold text-red-700">
            Falar sobre seu projeto <ArrowRight className="size-4" />
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
