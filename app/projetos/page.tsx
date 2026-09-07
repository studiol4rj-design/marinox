import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Portfólio da Marinox preparado para fotos, galerias, vídeos e soluções aplicadas.',
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Projetos" title="Portfólio técnico para obras e soluções metálicas" description="A área está preparada para conteúdo real da Marinox, com imagens provisórias recuperadas do site atual." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
