import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { contact, navItems } from '@/lib/site-data';

export function SiteHeader() {
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center" aria-label="Metalúrgica Marinox">
          <Image
            src="/marinox-assets/assets-images-logo-Logo-Marinox.png"
            alt="Metalúrgica Marinox"
            width={146}
            height={44}
            priority
            className="h-10 w-auto bg-transparent object-contain mix-blend-multiply sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-red-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-red-700 px-4 text-sm font-medium text-white transition hover:bg-red-800"
          >
            Solicite um orçamento
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 [&::-webkit-details-marker]:hidden">
            <Menu className="size-6" />
            <span className="sr-only">Abrir menu</span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 overflow-hidden rounded-xl border border-zinc-200 bg-white p-2 shadow-xl">
            <nav className="grid text-sm font-medium text-zinc-700">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-4 py-3 transition hover:bg-zinc-50 hover:text-red-700">
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 rounded-lg bg-red-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-red-800"
              >
                Solicite um orçamento
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
