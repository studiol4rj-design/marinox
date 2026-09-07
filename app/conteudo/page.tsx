import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Conteúdo',
  description: 'Base de conteúdo e SEO da Marinox para temas comerciais sobre projetos metálicos.',
};

export default function ContentPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Conteúdo" title="Base editorial para SEO e atendimento comercial" description="Poucos conteúdos demonstrativos, prontos para revisão e substituição por artigos definitivos." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {articles.map((article) => (
                <Link key={article.slug} href={`/conteudo/${article.slug}`} className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition hover:border-red-200 hover:bg-white">
                  <Badge className="bg-white text-zinc-700 hover:bg-white">{article.category}</Badge>
                  <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{article.title}</h2>
                  <p className="mt-4 leading-7 text-zinc-600">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-red-700">
                    Ler conteúdo <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
