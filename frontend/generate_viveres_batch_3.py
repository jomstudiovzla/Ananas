import os
import shutil
import time
from gradio_client import Client
from rembg import remove
from PIL import Image

def generate_batch_3():
    print("Iniciando la generación de imágenes de alta calidad (10 pasos) para el Lote 3 de VÍVERES (Arroz Primor, Pasta Capri, Harina PAN)...")
    try:
        client = Client("wafee-ops/SDXL-Turbo")
    except Exception as e:
        print(f"Error al conectar con el cliente Gradio: {e}")
        return

    # Prompts for Batch 3 of Víveres category (high quality, 10 steps)
    prompts = {
        'arroz_primor': "A plastic package bag of raw white rice, Arroz Primor bag, sealed bag of long grain rice, isolated on a pure white background, e-commerce product photography, highly detailed, sharp focus, 8k resolution",
        'pasta_capri': "A plastic package of dry spaghetti pasta, Pasta Capri packaging, isolated on a pure white background, e-commerce product photography, highly detailed, sharp focus, 8k resolution",
        'harina_pan': "A yellow package bag of pre-cooked white corn meal, Harina P.A.N. brand packaging, isolated on a pure white background, e-commerce product photography, highly detailed, sharp focus, 8k resolution"
    }

    output_dir = "public/images/products"
    os.makedirs(output_dir, exist_ok=True)

    for key, prompt in prompts.items():
        print(f"\n--- Generando {key} ---")
        success = False
        for attempt in range(3):
            try:
                # 10 steps (max allowed on slider) and 7 guidance
                result = client.predict(
                    prompt=prompt,
                    steps=10,
                    guidance=7,
                    api_name="/generate"
                )
                
                temp_path = result if isinstance(result, str) else result.get("path")
                if not temp_path or not os.path.exists(temp_path):
                    raise ValueError("No se obtuvo un archivo de imagen válido")
                
                # Process background removal
                print(f"  Removiendo fondo para {key}...")
                img = Image.open(temp_path).convert("RGBA")
                no_bg = remove(img)
                white_bg = Image.new("RGBA", no_bg.size, (255, 255, 255, 255))
                combined = Image.alpha_composite(white_bg, no_bg)
                final = combined.convert("RGB")
                
                dest_path = f"{output_dir}/{key}.png"
                final.save(dest_path, "PNG")
                print(f"  ✓ ¡Completado! Guardado en {dest_path}")
                success = True
                break
            except Exception as e:
                print(f"  ✗ Intento {attempt + 1} falló: {e}")
                time.sleep(2)
        
        if not success:
            print(f"  ⚠ No se pudo generar la imagen para {key} después de 3 intentos.")
            
        time.sleep(1)

    print("\n--- Lote 3 de VÍVERES Finalizado ---")

if __name__ == "__main__":
    generate_batch_3()
