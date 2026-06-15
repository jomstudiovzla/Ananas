export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  image: string;
  labels?: string[]; // e.g. "Oferta", "Nuevo"
  unit?: string;     // e.g. "1 Kg", "500g"
  stock?: number;
  warehouseStock?: number;
  description?: string;
  providerPrice?: number;
  views?: number;
  sales?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subcategories?: string[];
}

export const categories: Category[] = [
  {
    "id": "frutas-vegetales",
    "name": "Frutas y Vegetales",
    "icon": "🍎",
    "color": "bg-red-100 text-red-600",
    "subcategories": [
      "Frutas",
      "Verduras y hortalizas",
      "Tubérculos",
      "Verdes y hojas"
    ]
  },
  {
    "id": "refrigerados-congelados",
    "name": "Refrigerados",
    "icon": "❄️",
    "color": "bg-blue-100 text-blue-600",
    "subcategories": [
      "Carnes",
      "Pollo",
      "Charcutería",
      "Quesos",
      "Congelados listos"
    ]
  },
  {
    "id": "viveres",
    "name": "Víveres",
    "icon": "🥫",
    "color": "bg-orange-100 text-orange-600",
    "subcategories": [
      "Granos",
      "Arroz y pasta",
      "Enlatados",
      "Aceites y salsas",
      "Bebidas"
    ]
  },
  {
    "id": "cuidado-personal-salud",
    "name": "Cuidado Personal",
    "icon": "🧴",
    "color": "bg-teal-100 text-teal-600",
    "subcategories": [
      "Higiene personal",
      "Cuidado corporal",
      "Farmacia básica"
    ]
  },
  {
    "id": "limpieza",
    "name": "Limpieza",
    "icon": "🧽",
    "color": "bg-cyan-100 text-cyan-600",
    "subcategories": [
      "Ropa",
      "Cocina",
      "Baño",
      "Desinfección",
      "Accesorios de limpieza"
    ]
  },
  {
    "id": "licores",
    "name": "Licores",
    "icon": "🍷",
    "color": "bg-purple-100 text-purple-600",
    "subcategories": [
      "Cervezas",
      "Rones",
      "Whisky",
      "Vinos",
      "Otros destilados"
    ]
  }
];

export const products: Product[] = [
  {
    "id": "p-plazas-118573",
    "stock": 50,
    "subcategory": "Cervezas",
    "providerPrice": 1.4,
    "price": 2,
    "image": "/Ananas/images/products/scraped/p-plazas-118573.jpg",
    "name": "HIELO EN BOLSA GRANDE POISO",
    "category": "licores",
    "unit": "1 Unidad"
  },
  {
    "id": "p-plazas-119503",
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-119503.jpg",
    "name": "HUEVOS CARTON X 30UN",
    "price": 7,
    "subcategory": "Charcutería",
    "providerPrice": 4.8999999999999995,
    "stock": 50
  },
  {
    "id": "p-plazas-124224",
    "subcategory": "Congelados listos",
    "providerPrice": 4.8999999999999995,
    "price": 7,
    "name": "HELADO DE TORTA SUIZA EDMAR 946ML",
    "image": "/Ananas/images/products/scraped/p-plazas-124224.jpg",
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "stock": 50
  },
  {
    "id": "p-plazas-125209",
    "image": "/Ananas/images/products/scraped/p-plazas-125209.jpg",
    "name": "ESPARRAGOS VERDES VIMA CONGELADOS 450G",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "subcategory": "Verduras y hortalizas",
    "providerPrice": 8.399999999999999,
    "price": 12,
    "stock": 50
  },
  {
    "id": "p-plazas-125210",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "image": "/Ananas/images/products/scraped/p-plazas-125210.jpg",
    "name": "FLORES DE BROCOLI VIMA CONGELADAS 450G",
    "price": 6,
    "providerPrice": 4.199999999999999,
    "subcategory": "Verduras y hortalizas"
  },
  {
    "id": "p-plazas-125832",
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "name": "ALAS DE POLLO X KG",
    "image": "/Ananas/images/products/scraped/p-plazas-125832.jpg",
    "price": 4,
    "providerPrice": 2.8,
    "subcategory": "Pollo",
    "stock": 50
  },
  {
    "id": "p-plazas-125858",
    "subcategory": "Pollo",
    "providerPrice": 5.6,
    "price": 8,
    "image": "/Ananas/images/products/scraped/p-plazas-125858.jpg",
    "name": "PECHUGA DE POLLO SIN HUESO X KG",
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "stock": 50
  },
  {
    "id": "p-plazas-125914",
    "stock": 50,
    "price": 9,
    "subcategory": "Carnes",
    "providerPrice": 6.3,
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "image": "/Ananas/images/products/scraped/p-plazas-125914.jpg",
    "name": "CARNE PARA DESMECHAR SV"
  },
  {
    "id": "p-plazas-125941",
    "image": "/Ananas/images/products/scraped/p-plazas-125941.jpg",
    "name": "PULPA NEGRA SV",
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "providerPrice": 8.399999999999999,
    "subcategory": "Carnes",
    "price": 12,
    "stock": 50
  },
  {
    "id": "p-plazas-125953",
    "stock": 50,
    "subcategory": "Carnes",
    "providerPrice": 9.799999999999999,
    "price": 14,
    "image": "/Ananas/images/products/scraped/p-plazas-125953.jpg",
    "name": "PUNTA TRASERA DE CERDO PLUMROSE",
    "category": "refrigerados-congelados",
    "unit": "1 Unidad"
  },
  {
    "id": "p-plazas-126060",
    "price": 1,
    "providerPrice": 0.7,
    "subcategory": "Verduras y hortalizas",
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "name": "CALABACINES X KG",
    "image": "/Ananas/images/products/scraped/p-plazas-126060.jpg",
    "stock": 50
  },
  {
    "id": "p-plazas-126061",
    "stock": 50,
    "price": 1,
    "subcategory": "Frutas",
    "providerPrice": 0.7,
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "image": "/Ananas/images/products/scraped/p-plazas-126061.jpg",
    "name": "CAMBUR X KG"
  },
  {
    "id": "p-plazas-126098",
    "image": "/Ananas/images/products/scraped/p-plazas-126098.jpg",
    "name": "LECHOSA X KG",
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "subcategory": "Frutas",
    "providerPrice": 0.7,
    "price": 1,
    "stock": 50
  },
  {
    "id": "p-plazas-126100",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-126100.jpg",
    "name": "LIMONES X KG",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "subcategory": "Frutas",
    "providerPrice": 2.8,
    "price": 4
  },
  {
    "id": "p-plazas-126105",
    "name": "MANGO INJERTO X KG",
    "image": "/Ananas/images/products/scraped/p-plazas-126105.jpg",
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "providerPrice": 0.7,
    "subcategory": "Frutas",
    "price": 1,
    "stock": 50
  },
  {
    "id": "p-plazas-126120",
    "price": 3,
    "subcategory": "Tubérculos",
    "providerPrice": 2.0999999999999996,
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-126120.jpg",
    "name": "PAPAS X KG",
    "stock": 50
  },
  {
    "id": "p-plazas-126127",
    "image": "/Ananas/images/products/scraped/p-plazas-126127.jpg",
    "name": "PEPINOS X KG",
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "subcategory": "Verduras y hortalizas",
    "providerPrice": 0.7,
    "price": 1,
    "stock": 50
  },
  {
    "id": "p-plazas-126132",
    "image": "/Ananas/images/products/scraped/p-plazas-126132.jpg",
    "name": "PIÑA X UN",
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "providerPrice": 1.4,
    "subcategory": "Frutas",
    "price": 2,
    "stock": 50
  },
  {
    "id": "p-plazas-126139",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-126139.jpg",
    "name": "REPOLLO BLANCO X KG",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "providerPrice": 0.7,
    "subcategory": "Verdes y hojas",
    "price": 1
  },
  {
    "id": "p-plazas-126151",
    "price": 3,
    "subcategory": "Verduras y hortalizas",
    "providerPrice": 2.0999999999999996,
    "unit": "1 Unidad",
    "category": "frutas-vegetales",
    "image": "/Ananas/images/products/scraped/p-plazas-126151.jpg",
    "name": "TOMATES PERITA X KG",
    "stock": 50
  },
  {
    "id": "p-plazas-126160",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-126160.jpg",
    "name": "ZANAHORIAS X KG",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "subcategory": "Verduras y hortalizas",
    "providerPrice": 1.4,
    "price": 2
  },
  {
    "id": "p-plazas-129410",
    "image": "/Ananas/images/products/scraped/p-plazas-129410.jpg",
    "name": "CREMA DENTAL COLGATE TRIPLE ACCION 100ML",
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud",
    "subcategory": "Higiene personal",
    "providerPrice": 2.8,
    "price": 4,
    "stock": 50
  },
  {
    "id": "p-plazas-129411",
    "providerPrice": 2.0999999999999996,
    "subcategory": "Higiene personal",
    "price": 3,
    "image": "/Ananas/images/products/scraped/p-plazas-129411.jpg",
    "name": "CREMA DENTAL COLGATE TRIPLE ACCION 75ML",
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud",
    "stock": 50
  },
  {
    "id": "p-plazas-129413",
    "image": "/Ananas/images/products/scraped/p-plazas-129413.jpg",
    "name": "CEPILLO DENTAL COLGATE 360 MEDIO",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "providerPrice": 2.8,
    "subcategory": "Higiene personal",
    "price": 4,
    "stock": 50
  },
  {
    "id": "p-plazas-130013",
    "price": 14,
    "subcategory": "Higiene personal",
    "providerPrice": 9.799999999999999,
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud",
    "name": "AFEITADORA GILLETTE SENSOR 3 SENSITVE 4UN",
    "image": "/Ananas/images/products/scraped/p-plazas-130013.jpg",
    "stock": 50
  },
  {
    "id": "p-plazas-130493",
    "price": 2,
    "providerPrice": 1.4,
    "subcategory": "Higiene personal",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "name": "AGUA OXIGENADA IGORA VITAL 30 VOL 50ML",
    "image": "/Ananas/images/products/scraped/p-plazas-130493.jpg",
    "stock": 50
  },
  {
    "id": "p-plazas-130595",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-130595.jpg",
    "name": "JABON EN BARRA EVERY NIGHT BIO NUTRIENTES AVENA 110G",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "subcategory": "Higiene personal",
    "providerPrice": 1.4,
    "price": 2
  },
  {
    "id": "p-plazas-132136",
    "price": 1,
    "subcategory": "Cervezas",
    "providerPrice": 0.7,
    "unit": "1 Unidad",
    "category": "licores",
    "image": "/Ananas/images/products/scraped/p-plazas-132136.jpg",
    "name": "CERVEZA POLAR LIGHT EN BOLETTA NO RETORNABLE DE 355ML",
    "stock": 50
  },
  {
    "id": "p-plazas-132421",
    "subcategory": "Otros destilados",
    "providerPrice": 7.699999999999999,
    "price": 11,
    "image": "/Ananas/images/products/scraped/p-plazas-132421.jpg",
    "name": "VODKA GORDONS MANDARINA 0,70L",
    "category": "licores",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-132682",
    "image": "/Ananas/images/products/scraped/p-plazas-132682.jpg",
    "name": "CERVEZA POLAR PILSEN LATA DE 250ML",
    "unit": "1 Unidad",
    "category": "licores",
    "subcategory": "Cervezas",
    "providerPrice": 0.7,
    "price": 1,
    "stock": 50
  },
  {
    "id": "p-plazas-133154",
    "name": "CERVEZA POLAR PILSEN SLEEK LATA DE 355ML",
    "image": "/Ananas/images/products/scraped/p-plazas-133154.jpg",
    "unit": "1 Unidad",
    "category": "licores",
    "subcategory": "Cervezas",
    "providerPrice": 0.7,
    "price": 1,
    "stock": 50
  },
  {
    "id": "p-plazas-136158",
    "stock": 50,
    "name": "YOGUR GRIEGO DE BANANA Y FRESA CAPRIGURT 135G",
    "image": "/Ananas/images/products/scraped/p-plazas-136158.jpg",
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "subcategory": "Congelados listos",
    "providerPrice": 2.0999999999999996,
    "price": 3
  },
  {
    "id": "p-plazas-136433",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-136433.jpg",
    "name": "MUSLOS DE POLLO X KG",
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "subcategory": "Pollo",
    "providerPrice": 2.8,
    "price": 4
  },
  {
    "id": "p-plazas-136439",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-136439.jpg",
    "name": "CEBOLLA CRIOLLA X KG",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "providerPrice": 1.4,
    "subcategory": "Verduras y hortalizas",
    "price": 2
  },
  {
    "id": "p-plazas-136583",
    "providerPrice": 0.7,
    "subcategory": "Vinos",
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-136583.jpg",
    "name": "SANGRIA CAROREÑA VERANO LATA DE 250ML",
    "unit": "1 Unidad",
    "category": "licores",
    "stock": 50
  },
  {
    "id": "p-plazas-137240",
    "stock": 50,
    "providerPrice": 0.7,
    "subcategory": "Cervezas",
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-137240.jpg",
    "name": "CERVEZA SOLERA LATA DE 250ML",
    "category": "licores",
    "unit": "1 Unidad"
  },
  {
    "id": "p-plazas-137534",
    "providerPrice": 2.8,
    "subcategory": "Aceites y salsas",
    "price": 4,
    "image": "/Ananas/images/products/scraped/p-plazas-137534.jpg",
    "name": "MAYONESA MAVESA 445G",
    "category": "viveres",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-137536",
    "stock": 50,
    "providerPrice": 2.0999999999999996,
    "subcategory": "Aceites y salsas",
    "price": 3,
    "image": "/Ananas/images/products/scraped/p-plazas-137536.jpg",
    "name": "MARGARINA MAVESA 500G",
    "unit": "1 Unidad",
    "category": "viveres"
  },
  {
    "id": "p-plazas-137939",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "viveres",
    "name": "COCA COLA ORIGINAL CON MENOS CALORIAS 2L",
    "image": "/Ananas/images/products/scraped/p-plazas-137939.jpg",
    "price": 1,
    "providerPrice": 0.7,
    "subcategory": "Bebidas"
  },
  {
    "id": "p-plazas-138840",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "viveres",
    "image": "/Ananas/images/products/scraped/p-plazas-138840.jpg",
    "name": "MALTA MALTIN POLAR EN BOTELLA NO RETORNABLE 250ML",
    "price": 1.99,
    "providerPrice": 1.393,
    "subcategory": "Bebidas"
  },
  {
    "id": "p-plazas-139099",
    "stock": 50,
    "price": 5,
    "providerPrice": 3.5,
    "subcategory": "Granos",
    "unit": "1 Unidad",
    "category": "viveres",
    "image": "/Ananas/images/products/scraped/p-plazas-139099.jpg",
    "name": "MANI MEREY MIX COMETIN 190G"
  },
  {
    "id": "p-plazas-139787",
    "providerPrice": 2.8,
    "subcategory": "Granos",
    "price": 4,
    "name": "AJONJOLI LA INTEGRAL CRUDO 300G",
    "image": "/Ananas/images/products/scraped/p-plazas-139787.jpg",
    "category": "viveres",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-139826",
    "stock": 50,
    "providerPrice": 2.0999999999999996,
    "subcategory": "Bebidas",
    "price": 3,
    "image": "/Ananas/images/products/scraped/p-plazas-139826.jpg",
    "name": "AGUA MINERAL PERRIER GAS BOTELLA PLASTICA 500ML",
    "unit": "1 Unidad",
    "category": "viveres"
  },
  {
    "id": "p-plazas-140023",
    "stock": 50,
    "providerPrice": 0.7,
    "subcategory": "Enlatados",
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-140023.jpg",
    "name": "PUDIN DE FRESA ADDAS 85G",
    "category": "viveres",
    "unit": "1 Unidad"
  },
  {
    "id": "p-plazas-142112",
    "subcategory": "Enlatados",
    "providerPrice": 0.7,
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-142112.jpg",
    "name": "PAN HOLSUM BLANCO SUPER 420G",
    "category": "viveres",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-142124",
    "stock": 50,
    "providerPrice": 1.4,
    "subcategory": "Bebidas",
    "price": 2,
    "name": "LECHE LIQUIDA DESCREMADA UHT LA PASTOREÑA 1L",
    "image": "/Ananas/images/products/scraped/p-plazas-142124.jpg",
    "unit": "1 Unidad",
    "category": "viveres"
  },
  {
    "id": "p-plazas-142125",
    "unit": "1 Unidad",
    "category": "viveres",
    "image": "/Ananas/images/products/scraped/p-plazas-142125.jpg",
    "name": "LECHE COMPLETA LA PASTOREÑA 1L",
    "price": 2,
    "providerPrice": 1.4,
    "subcategory": "Bebidas",
    "stock": 50
  },
  {
    "id": "p-plazas-142173",
    "stock": 50,
    "price": 4,
    "providerPrice": 2.8,
    "subcategory": "Aceites y salsas",
    "category": "viveres",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-142173.jpg",
    "name": "ACEITE VATEL VEGETAL 1L"
  },
  {
    "id": "p-plazas-142720",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "viveres",
    "image": "/Ananas/images/products/scraped/p-plazas-142720.jpg",
    "name": "ARROZ MARY PREMIUM 900G",
    "price": 1,
    "subcategory": "Arroz y pasta",
    "providerPrice": 0.7
  },
  {
    "id": "p-plazas-142747",
    "stock": 50,
    "price": 1,
    "subcategory": "Arroz y pasta",
    "providerPrice": 0.7,
    "category": "viveres",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-142747.jpg",
    "name": "ARROZ MARY ESMERALDA 100% 900G"
  },
  {
    "id": "p-plazas-143142",
    "price": 18,
    "providerPrice": 12.6,
    "subcategory": "Otros destilados",
    "unit": "1 Unidad",
    "category": "licores",
    "image": "/Ananas/images/products/scraped/p-plazas-143142.jpg",
    "name": "SAMBUCA SICILIANA 0,70L",
    "stock": 50
  },
  {
    "id": "p-plazas-144341",
    "stock": 50,
    "price": 9,
    "providerPrice": 6.3,
    "subcategory": "Carnes",
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "image": "/Ananas/images/products/scraped/p-plazas-144341.jpg",
    "name": "CARNE DE RES PARA GUISAR SV"
  },
  {
    "id": "p-plazas-144342",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "image": "/Ananas/images/products/scraped/p-plazas-144342.jpg",
    "name": "SOLOMO DE CUERITO SV",
    "price": 13,
    "subcategory": "Carnes",
    "providerPrice": 9.1
  },
  {
    "id": "p-plazas-144343",
    "stock": 50,
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-144343.jpg",
    "name": "CARNE MOLIDA SV",
    "price": 9,
    "subcategory": "Carnes",
    "providerPrice": 6.3
  },
  {
    "id": "p-plazas-144618",
    "stock": 50,
    "unit": "1 Unidad",
    "category": "viveres",
    "image": "/Ananas/images/products/scraped/p-plazas-144618.jpg",
    "name": "ARROZ MARY SUPERIOR TIPO I 900G",
    "price": 1,
    "subcategory": "Arroz y pasta",
    "providerPrice": 0.7
  },
  {
    "id": "p-plazas-144820",
    "image": "/Ananas/images/products/scraped/p-plazas-144820.jpg",
    "name": "TAPAZOL 5MG X 60 TABLETAS",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "providerPrice": 9.799999999999999,
    "subcategory": "Farmacia básica",
    "price": 14,
    "stock": 50
  },
  {
    "id": "p-plazas-144920",
    "providerPrice": 10.5,
    "subcategory": "Farmacia básica",
    "price": 15,
    "image": "/Ananas/images/products/scraped/p-plazas-144920.jpg",
    "name": "LETISAN GOTAS 100 MG X 20 ML",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-145185",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "name": "PANTOPRAZOL COLMED 40MG X 10 TABLETAS RECUBIERTAS ENTERICAS",
    "image": "/Ananas/images/products/scraped/p-plazas-145185.jpg",
    "price": 8,
    "subcategory": "Farmacia básica",
    "providerPrice": 5.6,
    "stock": 50
  },
  {
    "id": "p-plazas-145204",
    "image": "/Ananas/images/products/scraped/p-plazas-145204.jpg",
    "name": "NIFEDIPINA LATTAN MEDIC 20MG X 30 COMPRIMIDOS",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "providerPrice": 4.199999999999999,
    "subcategory": "Farmacia básica",
    "price": 6,
    "stock": 50
  },
  {
    "id": "p-plazas-145304",
    "subcategory": "Vinos",
    "providerPrice": 0.7,
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-145304.jpg",
    "name": "SANGRIA CARORENA VERANO BLANCA LATA DE 250ML",
    "category": "licores",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-146542",
    "price": 38,
    "subcategory": "Carnes",
    "providerPrice": 26.599999999999998,
    "category": "refrigerados-congelados",
    "unit": "1 Unidad",
    "name": "SALMON SOTAVENTO AHUMADO 400G",
    "image": "/Ananas/images/products/scraped/p-plazas-146542.jpg",
    "stock": 50
  },
  {
    "id": "p-plazas-146926",
    "subcategory": "Higiene personal",
    "providerPrice": 6.3,
    "price": 9,
    "image": "/Ananas/images/products/scraped/p-plazas-146926.jpg",
    "name": "CREMA DENTAL COLGATE NATURAL EXTRA CARBON 140G",
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud",
    "stock": 50
  },
  {
    "id": "p-plazas-146941",
    "stock": 50,
    "image": "/Ananas/images/products/scraped/p-plazas-146941.jpg",
    "name": "TINTE MYSTIC RUBIO CLARO PLATINADO 12.0 TUBO DE 60G",
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud",
    "subcategory": "Higiene personal",
    "providerPrice": 3.5,
    "price": 5
  },
  {
    "id": "p-plazas-147236",
    "subcategory": "Vinos",
    "providerPrice": 12.6,
    "price": 18,
    "image": "/Ananas/images/products/scraped/p-plazas-147236.jpg",
    "name": "VINO ROOT 1 PINOT NOIR 2022 0,75 L",
    "category": "licores",
    "unit": "1 Unidad",
    "stock": 50
  },
  {
    "id": "p-plazas-147237",
    "category": "licores",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-147237.jpg",
    "name": "VINO ROOT 1 CARMENERE 2022 0,75 L",
    "price": 18,
    "providerPrice": 12.6,
    "subcategory": "Vinos",
    "stock": 50
  },
  {
    "id": "p-plazas-147238",
    "providerPrice": 12.6,
    "subcategory": "Vinos",
    "price": 18,
    "image": "/Ananas/images/products/scraped/p-plazas-147238.jpg",
    "name": "VINO ROOT1 CABERNET SAUVIGNON 2022 0,75L",
    "unit": "1 Unidad",
    "category": "licores",
    "stock": 50
  },
  {
    "id": "p-plazas-147477",
    "image": "/Ananas/images/products/scraped/p-plazas-147477.jpg",
    "name": "PAPEL HIGIENICO PLAZAS X 4 ROLLOS 400 HOJAS DOBLES",
    "category": "cuidado-personal-salud",
    "unit": "1 Unidad",
    "providerPrice": 1.4,
    "subcategory": "Higiene personal",
    "price": 2,
    "stock": 50
  },
  {
    "id": "p-plazas-147483",
    "providerPrice": 3.5,
    "subcategory": "Congelados listos",
    "price": 5,
    "image": "/Ananas/images/products/scraped/p-plazas-147483.jpg",
    "name": "SANDWICH CACAO3 BROWNIE RELLENO DE MANTECADO 100G",
    "unit": "1 Unidad",
    "category": "refrigerados-congelados",
    "stock": 50
  },
  {
    "id": "p-plazas-149116",
    "stock": 50,
    "subcategory": "Higiene personal",
    "providerPrice": 0.7,
    "price": 1,
    "image": "/Ananas/images/products/scraped/p-plazas-149116.jpg",
    "name": "PAPEL HIG PLAZAS X 4 ROLLOS 200 HOJ DOBL",
    "unit": "1 Unidad",
    "category": "cuidado-personal-salud"
  },
  {
    "id": "p-plazas-149286",
    "stock": 50,
    "category": "licores",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-149286.jpg",
    "name": "CARORENA VERANO MOJITO LATA 355ML",
    "price": 2,
    "providerPrice": 1.4,
    "subcategory": "Cervezas"
  },
  {
    "id": "p-plazas-149644",
    "image": "/Ananas/images/products/scraped/p-plazas-149644.jpg",
    "name": "PIMENTON ROJO X KG",
    "category": "frutas-vegetales",
    "unit": "1 Unidad",
    "subcategory": "Verduras y hortalizas",
    "providerPrice": 3.5,
    "price": 5,
    "stock": 50
  },
  {
    "id": "p-plazas-150618",
    "stock": 50,
    "price": 1,
    "subcategory": "Cervezas",
    "providerPrice": 0.7,
    "category": "licores",
    "unit": "1 Unidad",
    "image": "/Ananas/images/products/scraped/p-plazas-150618.jpg",
    "name": "CERVEZA CARDENAL LATA 250ML"
  },
  {
    "id": "p-plazas-151364",
    "price": 1,
    "subcategory": "Cervezas",
    "providerPrice": 0.7,
    "unit": "1 Unidad",
    "category": "licores",
    "name": "CERVEZA CARDENAL ULTRA LATA 250ML",
    "image": "/Ananas/images/products/scraped/p-plazas-151364.jpg",
    "stock": 50
  }
];
