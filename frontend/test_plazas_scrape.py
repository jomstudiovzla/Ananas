import requests
from bs4 import BeautifulSoup

def test_search(query):
    url = f"https://vallearriba.elplazas.com/catalogsearch/result/?q={query}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3"
    }
    
    print(f"Buscando '{query}' en El Plazas...")
    r = requests.get(url, headers=headers, timeout=15)
    print(f"Status Code: {r.status_code}")
    
    soup = BeautifulSoup(r.text, 'html.parser')
    
    # Let's search for product items.
    # In Magento, they are usually in elements with class "product-item" or similar.
    # Let's print some text snippets or classes to identify the structure.
    products = soup.find_all(class_='product-item')
    print(f"Product items found: {len(products)}")
    
    if len(products) == 0:
        # Let's look for any img tags with class containing product or in product list container
        print("Buscando imágenes...")
        for img in soup.find_all('img')[:10]:
            print(f"Img src: {img.get('src')}, alt: {img.get('alt')}")
            
    for i, p in enumerate(products[:5]):
        name_tag = p.find(class_='product-item-link')
        name = name_tag.text.strip() if name_tag else "N/A"
        
        price_tag = p.find(class_='price')
        price = price_tag.text.strip() if price_tag else "N/A"
        
        img_tag = p.find('img')
        img_url = img_tag.get('src') or img_tag.get('data-src') if img_tag else "N/A"
        
        print(f"{i+1}. {name} | Precio: {price} | Imagen: {img_url}")

if __name__ == "__main__":
    test_search("coca cola")
