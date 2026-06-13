import csv
import re
import json

csv_file = "public/data/productos_plantilla.csv"
ts_file = "src/data/mockDb.ts"

products = []

with open(csv_file, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        labels = f"['{row['labels']}']" if row['labels'] else "[]"
        
        # Build JS object string
        obj_str = f"  {{ id: '{row['id']}', name: \"{row['name']}\", price: {row['price']}, category: '{row['category']}', subcategory: '{row['subcategory']}', image: '{row['image']}', unit: '{row['unit']}', stock: {row['stock']}, warehouseStock: {row['warehouseStock']}"
        if row['labels']:
            obj_str += f", labels: ['{row['labels']}']"
        obj_str += " },"
        
        products.append(obj_str)

products_str = "export const products: Product[] = [\n" + "\n".join(products) + "\n];"

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to replace the products array
pattern = r"export const products:\ Product\[\] = \[.*?\];"
new_content = re.sub(pattern, products_str, content, flags=re.DOTALL)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("mockDb.ts actualizado correctamente con los 90 productos.")
