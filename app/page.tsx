import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Handshake, ShieldCheck } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SolutionCard } from '@/components/solution-card';
import { projects, solutions } from '@/lib/site-data';

const pillars = [
  {
    title: 'Atendimento',
    text: 'Contato próximo e objetivo para compreender cada demanda e conduzir o projeto com clareza desde o início.',
    icon: Handshake,
  },
  {
    title: 'Prazo',
    text: 'Planejamento e acompanhamento voltados ao cumprimento dos compromissos assumidos em cada etapa da execução.',
    icon: Clock,
  },
  {
    title: 'Qualidade',
    text: 'Execução cuidadosa, atenção aos detalhes e compromisso com um resultado compatível com as necessidades do projeto.',
    icon: ShieldCheck,
  },
];

const process = ['Entendimento do projeto', 'Planejamento', 'Fabricação', 'Execução', 'Entrega'];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1fr_.9fr] md:items-center lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Metalúrgica Marinox</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
                Soluções em metal. Projetos que ganham forma.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                Estruturas metálicas, esquadrias e artefatos sob medida para empresas, construtoras e projetos que exigem execução com atendimento, prazo e qualidade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contato" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-700 px-5 text-sm font-medium text-white transition hover:bg-red-800">
                  Fale sobre seu projeto <ArrowRight className="size-4" />
                </Link>
                <Link href="/projetos" className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
                  Conheça nossos projetos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-5 top-8 hidden h-32 w-2 bg-red-700 md:block" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100 shadow-2xl shadow-zinc-900/10 md:aspect-[5/6]">
                <Image src="/marinox-assets/assets-images-sliders-3.jpg" alt="Obra metálica da Marinox" fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Soluções" title="Execução sob medida para projetos em metal" description="Soluções para diferentes demandas de construção, arquitetura e ambientes corporativos, com atuação em todo o Brasil." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution) => <SolutionCard key={solution.slug} solution={solution} />)}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.85fr_1fr] md:items-start">
            <SectionTitle eyebrow="Compromisso" title="Uma parceria orientada à execução" description="Desde 2013, a Marinox transforma necessidades de projeto em soluções metálicas com foco em relacionamento, pontualidade e qualidade." />
            <div className="grid gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                    <Icon className="mb-4 size-7 text-red-700" />
                    <h3 className="text-xl font-semibold text-zinc-950">{pillar.title}</h3>
                    <p className="mt-2 leading-7 text-zinc-600">{pillar.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1fr] md:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-100">
              <Image src="/marinox-assets/assets-images-backgrounds-2.jpg" alt="Estrutura e execução da Marinox" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <div>
              <SectionTitle eyebrow="Sobre" title="Experiência aplicada à solução de projetos" description="A Marinox atua desde 2013 na fabricação de estruturas metálicas, esquadrias e artefatos de metais, atendendo demandas de diferentes portes em todo o Brasil." />
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end">
              <SectionTitle eyebrow="Projetos" title="Soluções que saem do projeto e chegam à execução" description="Conheça alguns dos trabalhos e aplicações que representam a atuação da Marinox em estruturas, esquadrias e artefatos metálicos." />
              <Link href="/projetos" className="inline-flex items-center gap-2 font-semibold text-red-700 md:justify-self-end">
                Ver todos os projetos <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Processo" title="Do entendimento à entrega" description="Um fluxo objetivo para conduzir cada demanda desde o primeiro contato até a execução e entrega do projeto." />
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {process.map((step, index) => (
                <div key={step} className="rounded-lg border border-zinc-200 bg-white p-5">
                  <span className="mb-8 inline-flex size-9 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white">{index + 1}</span>
                  <h3 className="font-semibold text-zinc-950">{step}</h3>
                  <CheckCircle2 className="mt-5 size-5 text-zinc-400" />
                </div>
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
