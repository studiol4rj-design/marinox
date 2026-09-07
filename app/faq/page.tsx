import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Perguntas frequentes sobre orçamento, atendimento e soluções da Marinox.',
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1fr]">
            <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" description="Respostas objetivas para apoiar o início da conversa comercial." />
            <Accordion className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question}>
                  <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-zinc-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
