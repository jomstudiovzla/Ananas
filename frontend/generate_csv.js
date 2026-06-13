const fs = require('fs');

const categories = [
  {
    id: 'frutas-vegetales',
    subcategories: ['Enteras', 'Picadas', 'Jugos', 'Frescos', 'Empacados'],
    products: [
      { name: 'Tomates Perita', sub: 'Frescos', unit: '1 Kg', price: 3.49 },
      { name: 'Cebolla Blanca', sub: 'Frescos', unit: '1 Kg', price: 2.10 },
      { name: 'Papa Lavada', sub: 'Frescos', unit: '1 Kg', price: 1.80 },
      { name: 'Zanahoria', sub: 'Frescos', unit: '1 Kg', price: 1.50 },
      { name: 'Pimentón Verde', sub: 'Frescos', unit: '1 Kg', price: 4.20 },
      { name: 'Lechuga Romana', sub: 'Frescos', unit: '1 Unidad', price: 1.20 },
      { name: 'Plátano Maduro', sub: 'Enteras', unit: '1 Kg', price: 1.90 },
      { name: 'Cambur', sub: 'Enteras', unit: '1 Kg', price: 1.10 },
      { name: 'Manzana Gala', sub: 'Enteras', unit: '1 Kg', price: 5.50 },
      { name: 'Naranja para Jugo', sub: 'Enteras', unit: '1 Kg', price: 1.60 },
      { name: 'Lechosa', sub: 'Enteras', unit: '1 Kg', price: 1.75 },
      { name: 'Limones', sub: 'Frescos', unit: '1 Kg', price: 4.19 },
      { name: 'Piña', sub: 'Enteras', unit: '1 Unidad', price: 2.55 },
      { name: 'Aguacate', sub: 'Frescos', unit: '1 Kg', price: 5.20 },
      { name: 'Frutas Picadas Mixtas', sub: 'Picadas', unit: '500g', price: 3.00 },
    ],
    images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400']
  },
  {
    id: 'refrigerados-congelados',
    subcategories: ['Carnes', 'Pollos', 'Embutidos'],
    products: [
      { name: 'Carne Molida SV', sub: 'Carnes', unit: '1 Kg', price: 9.95 },
      { name: 'Bistec de Ganso', sub: 'Carnes', unit: '1 Kg', price: 11.50 },
      { name: 'Costilla de Res', sub: 'Carnes', unit: '1 Kg', price: 7.80 },
      { name: 'Pechuga de Pollo sin Hueso', sub: 'Pollos', unit: '1 Kg', price: 8.45 },
      { name: 'Pollo Entero', sub: 'Pollos', unit: '1 Kg', price: 4.50 },
      { name: 'Muslos de Pollo', sub: 'Pollos', unit: '1 Kg', price: 5.20 },
      { name: 'Alitas de Pollo', sub: 'Pollos', unit: '1 Kg', price: 6.00 },
      { name: 'Jamón Cocido Plumrose', sub: 'Embutidos', unit: '500g', price: 6.50 },
      { name: 'Queso Amarillo Paisa', sub: 'Embutidos', unit: '500g', price: 7.20 },
      { name: 'Queso Blanco Duro', sub: 'Embutidos', unit: '1 Kg', price: 6.80 },
      { name: 'Salchichas Plumrose', sub: 'Embutidos', unit: '1 Paquete', price: 4.50 },
      { name: 'Tocino Ahumado', sub: 'Embutidos', unit: '250g', price: 4.80 },
      { name: 'Chorizo Carupanero', sub: 'Embutidos', unit: '500g', price: 5.50 },
      { name: 'Queso Guayanés', sub: 'Embutidos', unit: '500g', price: 4.50 },
      { name: 'Nuggets de Pollo Congelados', sub: 'Pollos', unit: '1 Paquete', price: 5.99 },
    ],
    images: ['https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400', 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400']
  },
  {
    id: 'viveres',
    subcategories: ['Arroz', 'Pasta', 'Enlatados'],
    products: [
      { name: 'Arroz Blanco Mary', sub: 'Arroz', unit: '1 Kg', price: 1.20 },
      { name: 'Arroz Primor', sub: 'Arroz', unit: '1 Kg', price: 1.30 },
      { name: 'Arroz Parbolizado', sub: 'Arroz', unit: '1 Kg', price: 1.50 },
      { name: 'Pasta Capri Espagueti', sub: 'Pasta', unit: '1 Kg', price: 1.60 },
      { name: 'Pasta Primor Vermicelli', sub: 'Pasta', unit: '1 Kg', price: 1.65 },
      { name: 'Pasta Corta Plumitas', sub: 'Pasta', unit: '500g', price: 0.90 },
      { name: 'Harina PAN', sub: 'Arroz', unit: '1 Kg', price: 1.15 },
      { name: 'Caraotas Negras Mary', sub: 'Enlatados', unit: '500g', price: 1.80 },
      { name: 'Lentejas', sub: 'Enlatados', unit: '500g', price: 2.10 },
      { name: 'Atún Margarita en Aceite', sub: 'Enlatados', unit: '140g', price: 2.50 },
      { name: 'Atún Margarita en Agua', sub: 'Enlatados', unit: '140g', price: 2.50 },
      { name: 'Sardinas en Salsa de Tomate', sub: 'Enlatados', unit: '170g', price: 1.20 },
      { name: 'Maíz Dulce en Lata', sub: 'Enlatados', unit: '300g', price: 1.50 },
      { name: 'Guisantes en Lata', sub: 'Enlatados', unit: '300g', price: 1.40 },
      { name: 'Aceite de Maíz Mazeite', sub: 'Arroz', unit: '1 Litro', price: 3.50 },
    ],
    images: ['https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=400', 'https://images.unsplash.com/photo-1599813188597-900f6b3dbf15?w=400']
  },
  {
    id: 'cuidado-personal-salud',
    subcategories: ['Aseo', 'Farmacia'],
    products: [
      { name: 'Jabón de Tocador Protex', sub: 'Aseo', unit: '3 Unidades', price: 3.50 },
      { name: 'Desodorante Dove Roll-on', sub: 'Aseo', unit: '50ml', price: 4.20 },
      { name: 'Crema Dental Colgate', sub: 'Aseo', unit: '100g', price: 2.80 },
      { name: 'Shampoo Pantene', sub: 'Aseo', unit: '400ml', price: 6.50 },
      { name: 'Acondicionador Pantene', sub: 'Aseo', unit: '400ml', price: 6.50 },
      { name: 'Papel Higiénico Scott', sub: 'Aseo', unit: '4 Rollos', price: 3.80 },
      { name: 'Toallas Sanitarias Always', sub: 'Aseo', unit: '10 Unidades', price: 2.90 },
      { name: 'Protectores Diarios', sub: 'Aseo', unit: '20 Unidades', price: 2.50 },
      { name: 'Máquina de Afeitar Gillette', sub: 'Aseo', unit: '2 Unidades', price: 3.00 },
      { name: 'Crema Corporal Lubriderm', sub: 'Aseo', unit: '400ml', price: 8.50 },
      { name: 'Algodón en Motas', sub: 'Farmacia', unit: '100g', price: 1.50 },
      { name: 'Hisopos Q-Tips', sub: 'Farmacia', unit: '100 Unidades', price: 1.80 },
      { name: 'Alcohol Isopropílico', sub: 'Farmacia', unit: '250ml', price: 2.20 },
      { name: 'Agua Oxigenada', sub: 'Farmacia', unit: '100ml', price: 1.00 },
      { name: 'Curitas Band-Aid', sub: 'Farmacia', unit: 'Caja', price: 3.00 },
    ],
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400', 'https://images.unsplash.com/photo-1584308666744-24d5e4a77918?w=400']
  },
  {
    id: 'limpieza',
    subcategories: ['Detergentes', 'Accesorios'],
    products: [
      { name: 'Detergente Líquido Ariel', sub: 'Detergentes', unit: '2 L', price: 8.50 },
      { name: 'Detergente en Polvo ACE', sub: 'Detergentes', unit: '1 Kg', price: 4.50 },
      { name: 'Suavizante Suavitel', sub: 'Detergentes', unit: '1 L', price: 3.80 },
      { name: 'Lavaplatos Líquido Las Llaves', sub: 'Detergentes', unit: '500ml', price: 2.50 },
      { name: 'Lavaplatos en Crema Axion', sub: 'Detergentes', unit: '250g', price: 1.80 },
      { name: 'Cloro Nevex', sub: 'Detergentes', unit: '1 L', price: 1.50 },
      { name: 'Desinfectante Mistolín', sub: 'Detergentes', unit: '1 L', price: 2.20 },
      { name: 'Limpiavidrios', sub: 'Detergentes', unit: '500ml', price: 2.80 },
      { name: 'Esponja Scotch-Brite', sub: 'Accesorios', unit: '3 Unidades', price: 3.50 },
      { name: 'Mopa de Algodón', sub: 'Accesorios', unit: '1 Unidad', price: 5.00 },
      { name: 'Escoba con Mango', sub: 'Accesorios', unit: '1 Unidad', price: 4.50 },
      { name: 'Coleto Tradicional', sub: 'Accesorios', unit: '1 Unidad', price: 2.00 },
      { name: 'Bolsas de Basura Grandes', sub: 'Accesorios', unit: '10 Unidades', price: 3.20 },
      { name: 'Bolsas de Basura Pequeñas', sub: 'Accesorios', unit: '20 Unidades', price: 2.50 },
      { name: 'Guantes de Goma', sub: 'Accesorios', unit: '1 Par', price: 2.00 },
    ],
    images: ['https://images.unsplash.com/photo-1585834057864-15f5cc1145ea?w=400', 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400']
  },
  {
    id: 'licores',
    subcategories: ['Vinos', 'Cervezas', 'Destilados'],
    products: [
      { name: 'Cerveza Polar Pilsen', sub: 'Cervezas', unit: 'Caja 36', price: 25.00 },
      { name: 'Cerveza Polar Light', sub: 'Cervezas', unit: 'Caja 36', price: 25.00 },
      { name: 'Cerveza Solera Verde', sub: 'Cervezas', unit: '6 Pack', price: 6.50 },
      { name: 'Cerveza Zulia', sub: 'Cervezas', unit: '6 Pack', price: 6.00 },
      { name: 'Ron Santa Teresa Linaje', sub: 'Destilados', unit: '750ml', price: 18.00 },
      { name: 'Ron Cacique Añejo', sub: 'Destilados', unit: '750ml', price: 12.00 },
      { name: 'Ron Pampero Aniversario', sub: 'Destilados', unit: '750ml', price: 22.00 },
      { name: 'Ron Diplomático Reserva Exclusiva', sub: 'Destilados', unit: '750ml', price: 35.00 },
      { name: 'Whisky Buchanan\'s 12 Años', sub: 'Destilados', unit: '750ml', price: 42.00 },
      { name: 'Whisky Old Parr 12 Años', sub: 'Destilados', unit: '750ml', price: 38.00 },
      { name: 'Vodka Gordon\'s', sub: 'Destilados', unit: '750ml', price: 10.00 },
      { name: 'Ginebra Gordon\'s', sub: 'Destilados', unit: '750ml', price: 14.00 },
      { name: 'Vino Tinto Casillero del Diablo', sub: 'Vinos', unit: '750ml', price: 12.50 },
      { name: 'Vino Blanco Santa Helena', sub: 'Vinos', unit: '750ml', price: 8.50 },
      { name: 'Espumante La Española', sub: 'Vinos', unit: '750ml', price: 9.00 },
    ],
    images: ['https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=400', 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400']
  }
];

let csv = 'id,name,price,category,subcategory,image,unit,labels,stock,warehouseStock\n';

let idCounter = 1;
for (const cat of categories) {
  for (const prod of cat.products) {
    const image = cat.images[Math.floor(Math.random() * cat.images.length)];
    const stock = Math.floor(Math.random() * 100) + 10;
    const warehouseStock = Math.floor(Math.random() * 500) + 50;
    const labels = Math.random() > 0.8 ? 'Nuevo' : (Math.random() > 0.8 ? 'Oferta' : '');
    
    csv += `p${idCounter},"${prod.name}",${prod.price},${cat.id},${prod.sub},"${image}",${prod.unit},${labels},${stock},${warehouseStock}\n`;
    idCounter++;
  }
}

fs.writeFileSync('public/data/productos_plantilla.csv', csv, 'utf8');
console.log('CSV generado con éxito.');
