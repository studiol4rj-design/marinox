import type { Metadata } from 'next';
import { ProjectDetailPage } from '@/components/project-detail-page';

export const metadata: Metadata = {
  title: 'Corrimão e guarda-corpo',
  description: 'Execução de corrimãos e guarda-corpos com foco em segurança, integração ao ambiente e qualidade de acabamento.',
};

export default function Page() {
  return <ProjectDetailPage slug="corrimao-guarda-corpo" />;
}
