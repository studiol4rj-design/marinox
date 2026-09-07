import Image from 'next/image';
import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'A Marinox',
  description: 'História, valores e atuação nacional da Metalúrgica Marinox.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.9fr_1fr] md:items-center">
            <SectionTitle
              eyebrow="A Marinox"
              title="Desde 2013 executando soluções em metal"
              description="A Metalúrgica Marinox iniciou suas atividades em 02/01/2013 realizando projetos e executando soluções para seus clientes."
            />
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-zinc-100">
              <Image src="/marinox-assets/assets-images-banners-1.jpg" alt="Estrutura e atuação da Marinox" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>
        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              ['Propósito', 'Transformar necessidades de projeto em soluções metálicas executadas com clareza e compromisso.'],
              ['Valores', 'Respeito aos clientes e colaboradores em todas as etapas do relacionamento e da execução.'],
              ['Atendimento nacional', 'Atuação preparada para atender demandas e projetos em todo o Brasil.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
                <p className="mt-4 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Compromisso" title="Atendimento, prazo e qualidade como pilares" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
              Cada projeto começa pelo entendimento da necessidade do cliente e avança com atenção ao planejamento, à execução e à entrega. É assim que a Marinox busca construir relações de confiança e soluções consistentes.
            </p>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
