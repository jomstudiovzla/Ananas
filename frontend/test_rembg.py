import os
from rembg import remove
from PIL import Image

def test():
    input_path = 'public/images/products/costilla_res.png'
    output_path = 'public/images/products/costilla_res_white.png'
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} no existe.")
        return

    print("Procesando eliminación de fondo...")
    try:
        input_img = Image.open(input_path)
        # remove() removes background, returning RGBA image
        no_bg = remove(input_img)
        
        # Create solid white canvas of same size
        white_bg = Image.new("RGBA", no_bg.size, (255, 255, 255, 255))
        
        # Merge transparent image over white background
        combined = Image.alpha_composite(white_bg, no_bg)
        
        # Save as RGB
        final_img = combined.convert("RGB")
        final_img.save(output_path, "PNG")
        print(f"✓ Éxito: Imagen guardada en {output_path}")
    except Exception as e:
        print(f"✗ Fallo: {e}")

if __name__ == '__main__':
    test()
