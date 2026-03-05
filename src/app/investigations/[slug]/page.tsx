import investigationDatabase from '@/data/investigations';
import InvestigationContent from './InvestigationContent';

export async function generateStaticParams() {
  return Object.keys(investigationDatabase).map((slug) => ({ slug }));
}

export default function InvestigationDetailPage() {
  return <InvestigationContent />;
}