export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  image: string;
  labels?: string[]; // e.g. "Oferta", "Nuevo"
  unit: string;
  stock?: number;
  warehouseStock?: number;
}

export const categories = [
  { id: 'frutas-vegetales', name: 'Frutas y Vegetales', icon: 'Apple', color: 'bg-[#8cc63f]', subcategories: ['Enteras', 'Picadas', 'Jugos', 'Frescos', 'Empacados'] },
  { id: 'refrigerados-congelados', name: 'Refrigerados y Congelados', icon: 'Beef', color: 'bg-[#231f20]', subcategories: ['Carnes', 'Pollos', 'Embutidos'] },
  { id: 'viveres', name: 'Víveres', icon: 'PackageOpen', color: 'bg-[#f26522]', subcategories: ['Arroz', 'Pasta', 'Enlatados'] },
  { id: 'cuidado-personal-salud', name: 'Cuidado Personal y Salud', icon: 'Syringe', color: 'bg-[#0054a6]', subcategories: ['Aseo', 'Farmacia'] },
  { id: 'limpieza', name: 'Limpieza', icon: 'SprayCan', color: 'bg-[#00a651]', subcategories: ['Detergentes', 'Accesorios'] },
  { id: 'licores', name: 'Licores', icon: 'Wine', color: 'bg-[#9e005d]', subcategories: ['Vinos', 'Cervezas', 'Destilados'] },
];

export const products: Product[] = [
  { id: 'p1', name: 'Tomates Perita', price: 3.49, category: 'frutas-vegetales', subcategory: 'Frescos', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', unit: '1 Kg', labels: ['Oferta'] },
  { id: 'p2', name: 'Lechosa', price: 1.75, category: 'frutas-vegetales', subcategory: 'Enteras', image: 'https://images.unsplash.com/photo-1615486171448-4fd1ab2c88f3?w=400', unit: '1 Kg' },
  { id: 'p3', name: 'Limones', price: 4.19, category: 'frutas-vegetales', subcategory: 'Frescos', image: 'https://images.unsplash.com/photo-1590502593747-42a996111401?w=400', unit: '1 Kg' },
  { id: 'p4', name: 'Piña', price: 2.55, category: 'frutas-vegetales', subcategory: 'Enteras', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400', unit: '1 Unidad' },
  { id: 'p5', name: 'Aguacate', price: 5.20, category: 'frutas-vegetales', subcategory: 'Frescos', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400', unit: '1 Kg', labels: ['Top'] },
  { id: 'p6', name: 'Carne Molida SV', price: 9.95, category: 'refrigerados-congelados', subcategory: 'Carnes', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400', unit: '1 Kg' },
  { id: 'p7', name: 'Pechuga de Pollo sin Hueso', price: 8.45, category: 'refrigerados-congelados', subcategory: 'Pollos', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', unit: '1 Kg', labels: ['Oferta'] },
  { id: 'p8', name: 'Vino Tinto Merlot', price: 15.00, category: 'licores', subcategory: 'Vinos', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=400', unit: '750 ml' },
  { id: 'p9', name: 'Arroz Blanco', price: 1.20, category: 'viveres', subcategory: 'Arroz', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=400', unit: '1 Kg' },
  { id: 'p10', name: 'Detergente Líquido', price: 6.50, category: 'limpieza', subcategory: 'Detergentes', image: 'https://images.unsplash.com/photo-1585834057864-15f5cc1145ea?w=400', unit: '2 L', labels: ['Nuevo'] },
];

export const zones = [
  "Ananas - Valle Arriba",
  "Ananas - La Trinidad",
  "Ananas - El Rosal",
  "Caracas Centro (Delivery)",
  "Caracas Este (Delivery)"
];
