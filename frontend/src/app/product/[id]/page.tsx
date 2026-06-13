import { products } from '@/data/mockDb';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductClient id={params.id} />;
}
