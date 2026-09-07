import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <Image
            src="/marinox-assets/assets-images-logo-logo-footer.png"
            alt="Metalúrgica Marinox"
            width={118}
            height={40}
            className="mb-6 h-10 w-auto object-contain"
          />
          <p className="max-w-md text-sm leading-6 text-zinc-300">
            Soluções e execução de projetos em estruturas metálicas, esquadrias e artefatos de metais para demandas em todo o Brasil.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-zinc-400">Navegação</h2>
          <div className="grid gap-2 text-sm text-zinc-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-zinc-400">Contato</h2>
          <div className="grid gap-3 text-sm text-zinc-300">
            <a className="flex items-center gap-2 hover:text-white" href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer">
              <Phone className="size-4" /> {contact.whatsappLabel}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${contact.email}`}>
              <Mail className="size-4" /> {contact.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> {contact.address}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-xs text-zinc-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="leading-6">
            <span>© 2026 Metalúrgica Marinox. Todos os direitos reservados.</span>
            <span className="mx-2 hidden md:inline">·</span>
            <span className="block md:inline">
              Desenvolvido e mantido por{' '}
              <a
                href="https://www.studiol4.com.br"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-red-500 transition hover:text-red-400"
              >
                Studio L4
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            <a
              href="https://fppericiasjudiciais.com.br/privacidade.html"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Política de Privacidade
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="https://fppericiasjudiciais.com.br/termos.html"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
