import { categoryDatabase } from '@/data/categories';
import CategoryContent from './CategoryContent';

// Generate static paths for all categories at build time
export async function generateStaticParams() {
  return Object.keys(categoryDatabase).map((category) => ({
    category,
  }));
}

export default function CategoryPage() {
  return <CategoryContent />;
}
