import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetNote, projects, solutions } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Soluções',
  description: 'Estruturas metálicas, esquadrias de ferro, esquadrias de alumínio e artefatos metálicos.',
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Soluções" title="Especialidades preparadas para projetos sob medida" description="Cada área foi estruturada para receber descrição, aplicações, fotos, projetos relacionados e CTA de orçamento." />
          </div>
        </section>
        <section className="px-5 pb-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8">
            {solutions.map((solution) => (
              <article id={solution.slug} key={solution.slug} className="grid gap-6 rounded-lg border border-zinc-200 bg-zinc-50 p-5 md:grid-cols-[.85fr_1fr] md:items-center">
                <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-zinc-100">
                  <Image src={solution.image} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">Solução</p>
                  <h2 className="mt-3 text-3xl font-semibold text-zinc-950">{solution.title}</h2>
                  <p className="mt-4 leading-7 text-zinc-600">{solution.summary}</p>
                  <ul className="mt-5 grid gap-2 text-zinc-700">
                    {solution.applications.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contato" className="inline-flex items-center gap-2 font-semibold text-red-700">
                      Solicitar orçamento <ArrowRight className="size-4" />
                    </Link>
                    <Link href="/projetos" className="inline-flex items-center gap-2 font-semibold text-zinc-700">
                      Ver projetos relacionados
                    </Link>
                  </div>
                  <p className="mt-5 text-xs text-zinc-500">{assetNote}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-zinc-950">Projetos relacionados</h2>
            <p className="mt-3 text-zinc-600">{projects.length} páginas demonstrativas já preparadas para receber dados reais.</p>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
