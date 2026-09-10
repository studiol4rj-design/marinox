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
  { title: 'Atendimento', text: 'Contato próximo e objetivo para compreender cada demanda e conduzir o projeto com clareza desde o início.', icon: Handshake },
  { title: 'Prazo', text: 'Planejamento e acompanhamento voltados ao cumprimento dos compromissos assumidos em cada etapa da execução.', icon: Clock },
  { title: 'Qualidade', text: 'Execução cuidadosa, atenção aos detalhes e compromisso com um resultado compatível com as necessidades do projeto.', icon: ShieldCheck },
];

const featuredClients = [
  { name: 'Outback Steakhouse', logo: '/marinox-assets/clientes/outback.png', featured: true },
  { name: 'Multiplan', logo: '/marinox-assets/clientes/multiplan.png', featured: true },
  { name: 'Queiroz Galvão', logo: '/marinox-assets/clientes/queiroz-galvao.png', featured: true },
  { name: 'Fogo de Chão', logo: '/marinox-assets/clientes/fogo-de-chao.png', featured: true },
  { name: 'Cobasi', logo: '/marinox-assets/clientes/cobasi.png', featured: true },
  { name: 'Alcance Construtora', logo: '/marinox-assets/clientes/alcance.png', featured: false },
  { name: 'Copacabana Palace', logo: '/marinox-assets/clientes/copacabana-palace.png', featured: false },
  { name: 'Smart Fit', logo: '/marinox-assets/clientes/smartfit.png', featured: true },
  { name: 'Colégio Santo Agostinho', logo: '/marinox-assets/clientes/santo-agostinho.png', featured: true },
  { name: 'Restaurante Galezzo', logo: '/marinox-assets/clientes/galezzo.png', featured: true },
  { name: 'Habitte Engenharia', logo: '/marinox-assets/clientes/habitte.jpg', featured: true },
  { name: 'LAR Construtora', logo: '/marinox-assets/clientes/lar-construtora.svg', featured: false },
  { name: 'Baggio & Carvalho', logo: '/marinox-assets/clientes/baggio-carvalho.png', featured: false },
  { name: 'Ramfej', logo: '/marinox-assets/clientes/ramfej.png', featured: false },
  { name: 'Retrofit Engenharia', logo: '/marinox-assets/clientes/retrofit.png', featured: false },
  { name: 'Saeng', logo: '/marinox-assets/clientes/saeng.png', featured: true },
];
const process = ['Entendimento do projeto', 'Planejamento', 'Fabricação', 'Execução', 'Entrega'];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-zinc-100">
          <div className="relative mx-auto aspect-[1672/941] w-full max-w-[1672px] min-h-[560px] sm:min-h-[620px]">
            <Image src="/marinox-assets/marinox-hero.jpg" alt="Projeto executado pela Metalúrgica Marinox com corrimão em inox e vista para o mar" fill priority sizes="100vw" className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
            <div className="relative mx-auto flex h-full min-h-[560px] max-w-7xl items-center px-5 py-16 sm:min-h-[620px] lg:px-8"><div className="max-w-3xl"><p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-red-700">Metalúrgica Marinox · Desde 2013</p><h1 className="text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-zinc-950 sm:text-6xl md:text-7xl lg:text-[5rem]">Soluções em metal.<span className="block text-red-700">Projetos que ganham forma.</span></h1><p className="mt-7 max-w-xl text-lg font-medium leading-8 text-zinc-800 md:text-xl">Estruturas metálicas, esquadrias e artefatos sob medida para empresas, construtoras e projetos que exigem execução com atendimento, prazo e qualidade.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contato" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-700 px-6 text-sm font-semibold text-white shadow-lg shadow-red-950/10 transition hover:bg-red-800">Solicite um orçamento <ArrowRight className="size-4" /></Link><Link href="/projetos" className="inline-flex h-12 items-center justify-center rounded-lg border border-red-700 bg-white/80 px-6 text-sm font-semibold text-red-700 backdrop-blur-sm transition hover:bg-white">Conheça nossos projetos <ArrowRight className="ml-2 size-4" /></Link></div></div></div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-transparent" />
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Soluções" title="Execução sob medida para projetos em metal" description="Soluções para diferentes demandas de construção, arquitetura e ambientes corporativos, com atuação em todo o Brasil." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{solutions.map((solution) => <SolutionCard key={solution.slug} solution={solution} />)}</div></div></section>

        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-700">Compromisso</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Parceria com grandes marcas <span className="text-red-700">em projetos de alto padrão.</span></h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">A confiança de empresas de referência em diversos segmentos reforça o compromisso da Marinox com atendimento, prazo e qualidade em cada projeto.</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {featuredClients.map((client) => (
                <div key={client.name} className="flex h-36 items-center justify-center sm:h-40">
                  <div className="flex h-28 w-full items-center justify-center sm:h-32">
                    <Image
                      src={client.logo}
                      alt={`Logomarca ${client.name}`}
                      width={520}
                      height={190}
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className={client.featured ? 'max-h-32 w-full scale-110 object-contain sm:max-h-36' : 'max-h-28 w-full object-contain sm:max-h-32'}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-16 h-px max-w-5xl bg-zinc-200" />

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return <div key={pillar.title} className="text-center"><span className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-50"><Icon className="size-7 text-red-700" /></span><h3 className="mt-5 text-xl font-semibold text-zinc-950">{pillar.title}</h3><p className="mx-auto mt-2 max-w-sm leading-7 text-zinc-600">{pillar.text}</p></div>;
              })}
            </div>
            <div className="mt-10 text-center"><Link href="/projetos" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-700 px-6 text-sm font-semibold text-white transition hover:bg-red-800">Conheça nossos projetos <ArrowRight className="size-4" /></Link></div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center"><div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100"><Image src="/marinox-assets/ilha-plaza-sobre.png" alt="Projeto executado pela Marinox no Ilha Plaza" fill sizes="(min-width: 768px) 52vw, 100vw" className="object-cover" /></div><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-red-700">Sobre</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Experiência aplicada à <span className="text-red-700">solução de projetos</span></h2><p className="mt-6 text-lg leading-8 text-zinc-600">A Marinox atua desde 2013 na fabricação de estruturas metálicas, esquadrias e artefatos de metais, atendendo demandas de diferentes portes em todo o Brasil.</p><p className="mt-5 text-lg leading-8 text-zinc-600">Unimos experiência de execução, atendimento próximo e compromisso com a qualidade para transformar necessidades específicas em soluções metálicas funcionais, bem acabadas e adequadas a cada projeto.</p><Link href="/sobre" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-700 px-6 text-sm font-semibold text-white transition hover:bg-red-800">Conheça nossa história <ArrowRight className="size-4" /></Link></div></div></section>
        <section className="bg-zinc-50 px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end"><SectionTitle eyebrow="Projetos" title="Soluções que saem do projeto e chegam à execução" description="Conheça alguns dos trabalhos e aplicações que representam a atuação da Marinox em estruturas, esquadrias e artefatos metálicos." /><Link href="/projetos" className="inline-flex items-center gap-2 font-semibold text-red-700 md:justify-self-end">Ver todos os projetos <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>
        <section className="bg-white px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Processo" title="Do entendimento à entrega" description="Um fluxo objetivo para conduzir cada demanda desde o primeiro contato até a execução e entrega do projeto." /><div className="mt-10 grid gap-4 md:grid-cols-5">{process.map((step, index) => <div key={step} className="rounded-lg border border-zinc-200 bg-white p-5"><span className="mb-8 inline-flex size-9 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white">{index + 1}</span><h3 className="font-semibold text-zinc-950">{step}</h3><CheckCircle2 className="mt-5 size-5 text-zinc-400" /></div>)}</div></div></section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
