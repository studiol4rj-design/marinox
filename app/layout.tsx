import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marinoxmetalurgica.com.br'),
  title: {
    default: 'Metalúrgica Marinox | Soluções em metal',
    template: '%s | Metalúrgica Marinox',
  },
  description:
    'Soluções em estruturas metálicas, esquadrias e artefatos de metais para projetos em todo o Brasil.',
  icons: {
    icon: '/marinox-assets/icon.png',
    shortcut: '/marinox-assets/icon.png',
    apple: '/marinox-assets/icon.png',
  },
  alternates: { canonical: './' },
  openGraph: {
    title: 'Metalúrgica Marinox',
    description:
      'Soluções em estruturas metálicas, esquadrias e artefatos de metais para projetos em todo o Brasil.',
    type: 'website',
    url: 'https://www.marinoxmetalurgica.com.br',
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
