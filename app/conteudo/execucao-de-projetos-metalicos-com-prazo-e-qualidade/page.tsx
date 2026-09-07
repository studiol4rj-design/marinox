import type { Metadata } from 'next';
import { ArticleDetailPage } from '@/components/article-detail-page';

export const metadata: Metadata = {
  title: 'Execução de projetos metálicos com atenção a prazo e qualidade',
  description: 'Planejamento, comunicação e acompanhamento são pontos importantes para uma execução eficiente em projetos metálicos.',
};

export default function Page() {
  return <ArticleDetailPage slug="execucao-de-projetos-metalicos-com-prazo-e-qualidade" />;
}
