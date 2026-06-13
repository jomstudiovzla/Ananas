import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";

const frutas = [
  { name: 'Tomates Perita x kg', price: 3.49, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lechosa x kg', price: 1.75, image: 'https://images.unsplash.com/photo-1615486171448-4fd1ab2c88f3?auto=format&fit=crop&w=400&q=80' },
  { name: 'Limones x kg', price: 4.19, image: 'https://images.unsplash.com/photo-1590502593747-42a996111401?auto=format&fit=crop&w=400&q=80' },
  { name: 'Piña x un', price: 2.55, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80' },
  { name: 'Aguacate x kg', price: 5.20, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80' },
];

const carnes = [
  { name: 'Carne Molida SV', price: 9.95, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Pechuga de Pollo sin Hueso', price: 8.45, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Pulpa Negra SV', price: 12.45, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white -mt-6 rounded-t-3xl relative z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] pt-6">
        <Categories />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
        <ProductSection title="FRUTAS Y VEGETALES" products={frutas} />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
        <ProductSection title="REFRIGERADOS Y CONGELADOS" products={carnes} />
      </div>
    </>
  );
}
