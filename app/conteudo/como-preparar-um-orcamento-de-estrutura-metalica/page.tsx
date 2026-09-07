import type { Metadata } from 'next';
import { ArticleDetailPage } from '@/components/article-detail-page';

export const metadata: Metadata = {
  title: 'Como preparar as informações para um orçamento de estrutura metálica',
  description: 'Informações bem organizadas ajudam a tornar o primeiro contato mais objetivo e facilitam a análise inicial da demanda.',
};

export default function Page() {
  return <ArticleDetailPage slug="como-preparar-um-orcamento-de-estrutura-metalica" />;
}
