import { categories, products } from '@/data/mockDb';
import ProductGrid from '@/components/ProductGrid';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((c) => ({
    slug: c.id,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.id === params.slug);
  
  if (!category) return notFound();

  const categoryProducts = products.filter(p => p.category === params.slug);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className={`p-8 rounded-3xl mb-12 text-white ${category.color} shadow-lg shadow-gray-200`}>
        <h1 className="text-4xl font-black mb-2">{category.name}</h1>
        <p className="font-medium opacity-90">Explora lo mejor de nuestra selección</p>
        
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {category.subcategories.map(sub => (
              <span key={sub} className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                {sub}
              </span>
            ))}
          </div>
        )}
      </div>

      <ProductGrid products={categoryProducts} />
    </div>
  );
}
