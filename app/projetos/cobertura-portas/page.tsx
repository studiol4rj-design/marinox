import type { Metadata } from 'next';
import { ProjectDetailPage } from '@/components/project-detail-page';

export const metadata: Metadata = {
  title: 'Cobertura e portas',
  description: 'Estruturas e fechamentos metálicos executados para atender às necessidades de proteção, acesso e integração arquitetônica.',
};

export default function Page() {
  return <ProjectDetailPage slug="cobertura-portas" />;
}
