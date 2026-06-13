import { products } from '@/data/mockDb';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}
