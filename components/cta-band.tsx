import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contact } from '@/lib/site-data';

export function CtaBand() {
  return (
    <section className="bg-zinc-950 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">Orçamento</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Tem um projeto? Vamos conversar.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contato" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-red-700 px-3 text-sm font-medium text-white transition hover:bg-red-800">
            Solicite um orçamento <ArrowRight className="size-4" />
          </Link>
          <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-white/30 px-3 text-sm font-medium text-white transition hover:bg-white hover:text-zinc-950">
            WhatsApp <MessageCircle className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
