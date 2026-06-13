"use client";
import { categories } from '@/data/mockDb';
import ProductGrid from '@/components/ProductGrid';
import { notFound } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';

export default function CategoryClient({ slug }: { slug: string }) {
  const products = useStore(state => state.products);
  const [mounted, setMounted] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const category = categories.find(c => c.id === slug);
  
  if (!category) return notFound();

  const categoryProducts = products.filter(p => {
    if (p.category !== slug) return false;
    if (activeSubcategory && p.subcategory !== activeSubcategory) return false;
    return true;
  });

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className={`p-8 rounded-3xl mb-12 text-white ${category.color} shadow-lg shadow-gray-200`}>
        <h1 className="text-4xl font-black mb-2">{category.name}</h1>
        <p className="font-medium opacity-90">Explora lo mejor de nuestra selección</p>
        
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            <span 
              onClick={() => setActiveSubcategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition ${activeSubcategory === null ? 'bg-white text-gray-900' : 'bg-white/20 hover:bg-white/30'}`}
            >
              Todos
            </span>
            {category.subcategories.map(sub => (
              <span 
                key={sub} 
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition ${activeSubcategory === sub ? 'bg-white text-gray-900' : 'bg-white/20 hover:bg-white/30'}`}
              >
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
