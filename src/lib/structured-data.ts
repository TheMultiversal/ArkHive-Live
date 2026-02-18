/**
 * Structured Data Utilities
 * JSON-LD schema generators for SEO
 */

// ============================================================
// Types
// ============================================================

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author: PersonSchema | PersonSchema[];
  publisher?: OrganizationSchema;
}

export interface PersonSchema {
  name: string;
  url?: string;
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WebPageSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
}

// ============================================================
// Schema Generators
// ============================================================

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(org?: Partial<OrganizationSchema>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org?.name || 'ArkHive',
    url: org?.url || BASE_URL,
    logo: org?.logo || `${BASE_URL}/logo.png`,
    description: org?.description || 'An investigative platform exposing the truth about government, corporate, and institutional actions.',
    sameAs: org?.sameAs || [],
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ArkHive',
    url: BASE_URL,
    description: 'An investigative platform exposing the truth about government, corporate, and institutional actions affecting public health and safety.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Article schema (for investigations)
 */
export function generateArticleSchema(article: ArticleSchema): Record<string, unknown> {
  const authors = Array.isArray(article.author) ? article.author : [article.author];

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: authors.map(a => ({
      '@type': 'Person',
      name: a.name,
      url: a.url,
    })),
    publisher: {
      '@type': 'Organization',
      name: article.publisher?.name || 'ArkHive',
      url: article.publisher?.url || BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: article.publisher?.logo || `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL,
    },
  };
}

/**
 * Generate NewsArticle schema (for investigations with news focus)
 */
export function generateNewsArticleSchema(article: ArticleSchema): Record<string, unknown> {
  return {
    ...generateArticleSchema(article),
    '@type': 'NewsArticle',
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(page: WebPageSchema): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url.startsWith('http') ? page.url : `${BASE_URL}${page.url}`,
    image: page.image,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ArkHive',
      url: BASE_URL,
    },
  };
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(person: PersonSchema): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    url: person.url,
    image: person.image,
  };
}

/**
 * Generate CollectionPage schema (for listings)
 */
export function generateCollectionPageSchema(page: WebPageSchema & { itemCount?: number }): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.name,
    description: page.description,
    url: page.url.startsWith('http') ? page.url : `${BASE_URL}${page.url}`,
    numberOfItems: page.itemCount,
  };
}

// ============================================================
// Helper Components
// ============================================================

/**
 * Serialize schema to JSON-LD script tag content
 */
export function serializeSchema(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}

/**
 * Create multiple schemas as JSON-LD array
 */
export function combineSchemas(...schemas: Record<string, unknown>[]): string {
  return JSON.stringify(schemas);
}
