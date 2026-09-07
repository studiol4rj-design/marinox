import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact, navItems } from '@/lib/site-data';

export function SiteHeader() {
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Metalúrgica Marinox">
          <Image
            src="/marinox-assets/assets-images-logo-Logo-Marinox.png"
            alt="Metalúrgica Marinox"
            width={146}
            height={44}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-red-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center justify-center rounded-lg bg-red-700 px-4 text-sm font-medium text-white transition hover:bg-red-800 sm:inline-flex"
          >
            Solicite um orçamento
          </a>
          <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menu">
            <Menu />
          </Button>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-zinc-100 px-5 py-3 text-sm font-medium text-zinc-700 lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
