"use client";
import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { products as initialProducts } from '@/data/mockDb';

export default function CatalogInitializer() {
  const { products, setProducts, fetchRates } = useStore();

  useEffect(() => {
    // Fetch live currency exchange rates from BCV API immediately on mount
    fetchRates();

    // Poll for new rates every 5 minutes to keep prices up to date in real-time
    const ratesInterval = setInterval(() => {
      fetchRates();
    }, 5 * 60 * 1000);

    const currentProducts = [...products];
    let hasChanges = false;

    initialProducts.forEach((ip) => {
      const exists = currentProducts.some((p) => p.id === ip.id);
      if (!exists) {
        currentProducts.push({
          ...ip,
          isActive: true,
          labels: ip.labels || [],
          unit: ip.unit || 'Unidad',
          stock: ip.stock || 0,
          warehouseStock: ip.warehouseStock || 0,
          description: ip.description || '',
          views: ip.views || 0,
          sales: ip.sales || 0,
        });
        hasChanges = true;
      }
    });

    if (hasChanges) {
      setProducts(currentProducts);
    }
    
    return () => clearInterval(ratesInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
