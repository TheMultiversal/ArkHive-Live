import { Metadata } from 'next';
import investigationDatabase from '@/data/investigations';

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const investigation = investigationDatabase[slug];

  if (!investigation) {
    return {
      title: 'Investigation Not Found',
    };
  }

  return {
    title: investigation.title,
    description: investigation.summary || investigation.subtitle,
    openGraph: {
      title: `${investigation.title} | ArkHive`,
      description: investigation.summary || investigation.subtitle,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${investigation.title} | ArkHive`,
      description: investigation.summary || investigation.subtitle,
    },
  };
}

export default function InvestigationSlugLayout({ children }: Props) {
  return children;
}
