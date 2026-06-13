import os
import urllib.request
import ssl
import time

# Create unverified SSL context to avoid certificate verification issues on some local machines
ssl._create_default_https_context = ssl._create_unverified_context

# Map product names in the REFRIGERADOS category to high-quality Unsplash food photo IDs
# We request a 600x600 square crop directly from Unsplash for beautiful visual presentation.
refrigerados_images = {
    'costilla_res': 'photo-1544025162-d76694265947', # Beef ribs / raw meat
    'pechuga_pollo': 'photo-1604503468506-a8da13d82791', # Raw chicken breast
    'pollo_entero': 'photo-1606728035253-49e8a23146de', # Raw whole chicken
    'muslos_pollo': 'photo-1569058242253-92a9c755a0ec', # Raw chicken legs/thighs
    'alitas_pollo': 'photo-1567620832903-9fc6debc209f', # Raw chicken wings
    'jamon_cocido': 'photo-1524438418049-ab2acb7aa48f', # Gourmet sliced ham
    'queso_amarillo': 'photo-1596450514735-111a2fe02935', # Yellow cheese slices
    'queso_blanco': 'photo-1618164435735-413d3b066c9a', # White cheese slices/blocks
    'salchichas': 'photo-1585325701956-60dd9c8553bc', # Fresh sausages
    'tocino': 'photo-1608039829572-78524f79c4c7', # Raw sliced bacon
    'chorizo': 'photo-1534422298391-e4f8c172dddb', # Chorizo links
    'queso_guayanes': 'photo-1559561853-08451507cbe7', # Venezuelan style fresh cheese
    'nuggets': 'photo-1569718212165-3a8278d5f624' # Chicken nuggets/fried bites
}

output_dir = 'public/images/products'
os.makedirs(output_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}

print("Iniciando la descarga de imágenes premium para la categoría REFRIGERADOS...")

for name, photo_id in refrigerados_images.items():
    filepath = f"{output_dir}/{name}.png"
    # Constructing Unsplash URL with a perfect 600x600 square crop, high quality
    url = f"https://images.unsplash.com/{photo_id}?w=600&h=600&fit=crop&q=85&fm=png"
    
    print(f"Descargando {name}.png...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"✓ ¡Completado! Guardado en {filepath}")
    except Exception as e:
        print(f"✗ Error al descargar {name}: {e}")
    
    # Polite sleep to respect server rates
    time.sleep(0.5)

print("\n--- Proceso de descarga finalizado ---")
