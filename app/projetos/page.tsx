import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos e aplicações da Marinox em estruturas, esquadrias e soluções metálicas.',
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Projetos" title="Soluções metálicas aplicadas a diferentes demandas" description="Conheça trabalhos e aplicações que representam a atuação da Marinox em estruturas, esquadrias e artefatos metálicos." />
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
