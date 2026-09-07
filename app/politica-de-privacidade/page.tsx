import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white px-5 py-16 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-700">Privacidade</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Política de Privacidade</h1>
          <div className="mt-8 space-y-8 text-zinc-700">
            <section><h2 className="text-2xl font-semibold text-zinc-950">Informações e contato</h2><p className="mt-3 leading-7">A Metalúrgica Marinox pode receber informações fornecidas voluntariamente por visitantes e clientes por meio de formulários, e-mail, WhatsApp e demais canais de atendimento, incluindo nome, empresa, telefone, e-mail e informações relacionadas à solicitação apresentada.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Uso das informações</h2><p className="mt-3 leading-7">As informações são utilizadas para responder solicitações, prestar atendimento, compreender necessidades de projeto, manter registros de relacionamento e atender obrigações aplicáveis.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Compartilhamento</h2><p className="mt-3 leading-7">A Marinox não comercializa dados pessoais. Informações podem ser compartilhadas quando necessário para atendimento, operação do site, execução de serviços ou cumprimento de obrigações aplicáveis.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Segurança</h2><p className="mt-3 leading-7">São adotadas medidas razoáveis para proteger informações contra acesso, alteração, divulgação ou uso indevido.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Solicitações</h2><p className="mt-3 leading-7">Solicitações relacionadas a dados e privacidade podem ser encaminhadas para comercial@marinoxmetalurgica.com.br.</p></section>
            <section><h2 className="text-2xl font-semibold text-zinc-950">Atualizações</h2><p className="mt-3 leading-7">Esta política pode ser atualizada sempre que necessário. A versão vigente permanecerá disponível nesta página.</p></section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
