import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { solutions } from '@/lib/site-data';

type Solution = (typeof solutions)[number];

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link href={`/solucoes#${solution.slug}`} className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image src={solution.image} alt="" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-zinc-950">{solution.title}</h3>
          <ArrowUpRight className="size-5 text-red-700" />
        </div>
        <p className="text-sm leading-6 text-zinc-600">{solution.summary}</p>
      </div>
    </Link>
  );
}
