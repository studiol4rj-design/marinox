import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/lib/site-data';

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = articles.find((item) => item.slug === params.slug);
  return {
    title: article ? article.title : 'Conteúdo',
    description: article?.excerpt,
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white px-5 py-16 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <Badge className="bg-red-50 text-red-800 hover:bg-red-50">Conteúdo demonstrativo</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">{article.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-700">
            {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link href="/contato" className="mt-10 inline-flex items-center gap-2 font-semibold text-red-700">
            Conversar sobre um projeto <ArrowRight className="size-4" />
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
