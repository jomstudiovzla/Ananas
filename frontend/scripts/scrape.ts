import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const categoriesToScrape = [
  { url: 'https://vallearriba.elplazas.com/frutas-y-vegetales.html', ananasCategory: 'frutas-vegetales' },
  { url: 'https://vallearriba.elplazas.com/refrigerados-y-congelados.html', ananasCategory: 'refrigerados-congelados' },
  { url: 'https://vallearriba.elplazas.com/viveres.html', ananasCategory: 'viveres' },
  { url: 'https://vallearriba.elplazas.com/cuidado-personal-y-salud.html', ananasCategory: 'cuidado-personal-salud' },
  { url: 'https://vallearriba.elplazas.com/limpieza-y-mascotas.html', ananasCategory: 'limpieza' },
  { url: 'https://vallearriba.elplazas.com/licores.html', ananasCategory: 'licores' }
];

async function run() {
  let allProducts: any[] = [];
  
  for (const cat of categoriesToScrape) {
    console.log(`Scraping category: ${cat.ananasCategory}`);
    try {
      const { data } = await axios.get(cat.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
        }
      });
      const $ = cheerio.load(data);
      
      const items = $('.product-item-info').slice(0, 15);
      console.log(`Found ${items.length} items`);
      
      items.each((i, el) => {
        const name = $(el).find('.product-item-link').text().trim() || $(el).find('.product-item-name').text().trim();
        const priceStr = $(el).find('.price').first().text().replace('$', '').trim();
        const img = $(el).find('.product-image-photo').attr('src');
        
        // El id puede sacarse de algun atributo, o generamos uno
        const idStr = $(el).find('.price-box').attr('data-product-id') || `scraped-${cat.ananasCategory}-${i}`;
        
        if (name && img) {
          allProducts.push({
            id: `p-plazas-${idStr}`,
            name,
            price: parseFloat(priceStr) || 1.99,
            category: cat.ananasCategory,
            image: img,
            unit: '1 Unidad',
            stock: 50,
            providerPrice: (parseFloat(priceStr) || 1.99) * 0.7
          });
        }
      });
      
      // Esperar un poco para no saturar el server
      await new Promise(r => setTimeout(r, 2000));
    } catch (e: any) {
      console.log(`Error on ${cat.url}: ${e.message}`);
    }
  }
  
  fs.writeFileSync('./scrapedProducts.json', JSON.stringify(allProducts, null, 2));
  console.log(`Scraped ${allProducts.length} total products. Saved to scrapedProducts.json`);
}

run();
