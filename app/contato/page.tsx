import Image from 'next/image';
import type { Metadata } from 'next';
import { Download, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { contact } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contato e Orçamento',
  description: 'Solicite orçamento para estruturas metálicas, esquadrias e artefatos metálicos.',
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1fr]">
            <div>
              <SectionTitle eyebrow="Contato" title="Fale sobre seu projeto" description="Envie as informações iniciais da sua demanda e a Marinox poderá avaliar o melhor caminho para o orçamento e a execução." />
              <div className="mt-8 grid gap-3 text-zinc-700">
                <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4 hover:border-red-200">
                  <Phone className="size-5 text-red-700" /> {contact.whatsappLabel}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4 hover:border-red-200">
                  <Mail className="size-5 text-red-700" /> {contact.email}
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4">
                  <MapPin className="size-5 text-red-700" /> {contact.address}
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-5">
                <Download className="mb-3 size-5 text-red-700" />
                <h2 className="font-semibold text-zinc-950">Catálogo Marinox</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Conheça as principais soluções e aplicações da Marinox em estruturas, esquadrias e artefatos metálicos.</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="border-t border-zinc-200 bg-zinc-50 px-5 py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_.8fr] md:items-center">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white">
              <Image src="/marinox-assets/assets-images-backgrounds-map.png" alt="Área de atendimento da Marinox" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </div>
            <div>
              <MessageCircle className="mb-4 size-7 text-red-700" />
              <h2 className="text-3xl font-semibold text-zinc-950">Atendimento direto pelo WhatsApp</h2>
              <p className="mt-4 leading-7 text-zinc-600">Entre em contato para apresentar sua necessidade, enviar informações iniciais e dar o primeiro passo para o orçamento do projeto.</p>
              <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex h-9 items-center justify-center rounded-lg bg-red-700 px-3 text-sm font-medium text-white transition hover:bg-red-800">
                Falar com a Marinox
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
