import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marinox-metalurgica.tuned-civet-0855.chatgpt.site'),
  title: {
    default: 'Metalúrgica Marinox | Soluções em metal',
    template: '%s | Metalúrgica Marinox',
  },
  description:
    'Soluções em estruturas metálicas, esquadrias e artefatos de metais para projetos em todo o Brasil.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Metalúrgica Marinox',
    description:
      'Soluções em estruturas metálicas, esquadrias e artefatos de metais para projetos em todo o Brasil.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
