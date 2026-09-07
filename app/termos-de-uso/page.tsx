import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function TermsOfUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white px-5 py-16 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-700">Termos</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Termos de Uso</h1>
          <div className="mt-8 space-y-8 text-zinc-700">
            <section><h2 className="text-2xl font-semibold text-zinc-950">Uso do site</h2><p className="mt-3 leading-7">Este site tem caráter institucional e apresenta informações sobre a Metalúrgica Marinox, seus serviços, soluções e canais de contato. Ao utilizar o site, o visitante concorda em fazê-lo de forma lícita e compatível com sua finalidade.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Conteúdo</h2><p className="mt-3 leading-7">Textos, imagens, marcas, elementos visuais e demais conteúdos presentes neste site são protegidos pela legislação aplicável e não devem ser reproduzidos, distribuídos ou utilizados indevidamente sem autorização.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Informações e propostas</h2><p className="mt-3 leading-7">As informações disponibilizadas no site possuem caráter informativo. Condições comerciais, escopo, prazos, valores e demais características de cada projeto somente serão considerados válidos quando formalizados diretamente entre as partes.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Links externos</h2><p className="mt-3 leading-7">O site pode conter links para serviços ou páginas externas. A Marinox não controla conteúdos, políticas ou práticas de terceiros e não se responsabiliza por alterações realizadas nesses ambientes externos.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Disponibilidade</h2><p className="mt-3 leading-7">A Marinox poderá atualizar, modificar, suspender ou remover conteúdos e funcionalidades do site quando necessário, sem obrigação de aviso prévio.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Contato</h2><p className="mt-3 leading-7">Dúvidas relacionadas a estes termos podem ser encaminhadas para comercial@marinoxmetalurgica.com.br.</p></section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
