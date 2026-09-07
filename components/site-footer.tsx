import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100 text-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <Image
            src="/marinox-assets/assets-images-logo-Logo-Marinox.png"
            alt="Metalúrgica Marinox"
            width={146}
            height={44}
            className="mb-6 h-11 w-auto object-contain"
          />
          <p className="max-w-md text-sm leading-6 text-zinc-600">
            Soluções e execução de projetos em estruturas metálicas, esquadrias e artefatos de metais para demandas em todo o Brasil.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-zinc-700">Navegação</h2>
          <div className="grid gap-2 text-sm text-zinc-600">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-red-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-zinc-700">Contato</h2>
          <div className="grid gap-3 text-sm text-zinc-600">
            <a className="flex items-center gap-2 transition hover:text-red-700" href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer">
              <Phone className="size-4" /> {contact.whatsappLabel}
            </a>
            <a className="flex items-center gap-2 transition hover:text-red-700" href={`mailto:${contact.email}`}>
              <Mail className="size-4" /> {contact.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> {contact.address}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-300 px-5 py-6 text-xs text-zinc-600 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="leading-6">
            <span>© 2026 Metalúrgica Marinox. Todos os direitos reservados.</span>
            <span className="mx-2">·</span>
            <span>
              Desenvolvido e mantido por{' '}
              <a
                href="https://www.studiol4.com.br"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-red-700 transition hover:text-red-800"
              >
                Studio L4
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/politica-de-privacidade" className="transition hover:text-red-700">
              Política de Privacidade
            </Link>
            <span className="text-zinc-400">|</span>
            <Link href="/termos-de-uso" className="transition hover:text-red-700">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
