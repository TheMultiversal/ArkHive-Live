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

  const description = investigation.summary || investigation.subtitle;

  return {
    title: investigation.title,
    description,
    openGraph: {
      title: `${investigation.title} | ArkHive`,
      description,
      type: 'article',
      publishedTime: investigation.eventOriginDate || investigation.date,
      modifiedTime: investigation.lastUpdated,
      tags: investigation.tags,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: investigation.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${investigation.title} | ArkHive`,
      description,
    },
  };
}

export default function InvestigationSlugLayout({ children }: Props) {
  return children;
}
