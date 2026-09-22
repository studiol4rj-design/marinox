import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { projects } from '@/lib/site-data';

type Project = (typeof projects)[number];

export function ProjectCard({ project, heading: Heading = 'h3' }: { project: Project; heading?: 'h2' | 'h3' }) {
  return (
    <Link prefetch={false} href={`/projetos/${project.slug}`} className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
        <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <Badge className="mb-4 bg-red-50 text-red-800 hover:bg-red-50">{project.status}</Badge>
        <p className="text-sm font-semibold text-red-700">{project.category}</p>
        <Heading className="mt-2 text-2xl font-semibold text-zinc-950">{project.title}</Heading>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
      </div>
    </Link>
  );
}
