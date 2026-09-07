import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects, solutions } from '@/lib/site-data';

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
            <SectionTitle eyebrow="Soluções" title="Soluções sob medida para diferentes projetos" description="Estruturas, esquadrias e artefatos metálicos desenvolvidos para atender às necessidades de empresas, construtoras e projetos de arquitetura." />
          </div>
        </section>
        <section className="px-5 pb-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8">
            {solutions.map((solution) => (
              <article id={solution.slug} key={solution.slug} className="grid gap-6 rounded-lg border border-zinc-200 bg-zinc-50 p-5 md:grid-cols-[.85fr_1fr] md:items-center">
                <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-zinc-100">
                  <Image src={solution.image} alt={solution.title} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
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
                      Falar sobre esta solução <ArrowRight className="size-4" />
                    </Link>
                    <Link href="/projetos" className="inline-flex items-center gap-2 font-semibold text-zinc-700">
                      Ver projetos relacionados
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-zinc-950">Projetos relacionados</h2>
            <p className="mt-3 text-zinc-600">Conheça {projects.length} aplicações em destaque e veja como diferentes soluções metálicas podem atender às necessidades de cada projeto.</p>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
