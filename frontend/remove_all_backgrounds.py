import os
import glob
from rembg import remove
from PIL import Image

def process_all():
    image_dir = 'public/images/products'
    images = glob.glob(f"{image_dir}/*.png")
    
    # Exclude any temporary or test files
    images = [img for img in images if "_white.png" not in img]
    
    print(f"Encontradas {len(images)} imágenes para procesar.")
    
    for i, img_path in enumerate(images):
        filename = os.path.basename(img_path)
        print(f"[{i+1}/{len(images)}] Removiendo fondo y colocando fondo blanco a: {filename}...")
        try:
            input_img = Image.open(img_path)
            
            # Convert to RGBA so rembg can process transparency
            input_rgba = input_img.convert("RGBA")
            
            # Remove background using U2-Net
            no_bg = remove(input_rgba)
            
            # Create a solid white background of the exact same size
            white_bg = Image.new("RGBA", no_bg.size, (255, 255, 255, 255))
            
            # Alpha composite the transparent foreground onto the solid white background
            combined = Image.alpha_composite(white_bg, no_bg)
            
            # Convert back to RGB and save it over the original file
            final_img = combined.convert("RGB")
            final_img.save(img_path, "PNG")
            print(f"  ✓ Sincronizado con éxito.")
        except Exception as e:
            print(f"  ✗ Error en {filename}: {e}")

if __name__ == '__main__':
    process_all()
