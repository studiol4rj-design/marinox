import type { Metadata } from 'next';
import { ProjectDetailPage } from '@/components/project-detail-page';

export const metadata: Metadata = {
  title: 'Mobiliários e estruturas',
  description: 'Soluções em mobiliário e estruturas metálicas desenvolvidas para integrar funcionalidade, acabamento e execução sob medida.',
};

export default function Page() {
  return <ProjectDetailPage slug="mobiliarios-estruturas-restaurante" />;
}
