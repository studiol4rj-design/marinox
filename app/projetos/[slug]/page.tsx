import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { assetNote, projects } from '@/lib/site-data';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? project.title : 'Projeto',
    description: project?.description,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge className="bg-red-50 text-red-800 hover:bg-red-50">{project.status}</Badge>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">{project.description}</p>
            <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-lg bg-zinc-100">
              <Image src={project.image} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
            <p className="mt-3 text-xs text-zinc-500">{assetNote}</p>
          </div>
        </section>
        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            <div><p className="text-sm text-zinc-500">Categoria</p><p className="mt-2 font-semibold text-zinc-950">{project.category}</p></div>
            <div><p className="text-sm text-zinc-500">Solução aplicada</p><p className="mt-2 font-semibold text-zinc-950">{project.solution}</p></div>
            <div><p className="text-sm text-zinc-500">Vídeo</p><p className="mt-2 inline-flex items-center gap-2 font-semibold text-zinc-950"><PlayCircle className="size-4" /> Espaço preparado</p></div>
          </div>
        </section>
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-zinc-950">Galeria</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {project.gallery.map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
                  <Image src={image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
            <Link href="/contato" className="mt-10 inline-flex items-center gap-2 font-semibold text-red-700">
              Solicitar orçamento para projeto semelhante <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
