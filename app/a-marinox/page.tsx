import Image from 'next/image';
import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetNote } from '@/lib/site-data';

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
            <div>
              <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-zinc-100">
                <Image src="/marinox-assets/assets-images-banners-1.jpg" alt="Registro provisório da Marinox" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <p className="mt-3 text-xs text-zinc-500">{assetNote}</p>
            </div>
          </div>
        </section>
        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              ['Propósito', 'Fornecer solução e execução para projetos que envolvem estruturas, esquadrias e artefatos metálicos.'],
              ['Valores', 'Respeito aos clientes e respeito aos colaboradores.'],
              ['Atendimento nacional', 'Área de atendimento preparada para demandas em todo o Brasil.'],
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
              A primeira versão do site apresenta os compromissos informados pela Marinox sem acrescentar certificações, números, obras ou capacidades produtivas ainda não confirmadas.
            </p>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
