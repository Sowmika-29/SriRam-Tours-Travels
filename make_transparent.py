from PIL import Image

def remove_background(input_path, output_path, tolerance=20):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Assuming white/near-white background
            if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
                newData.append((255, 255, 255, 0)) # Transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully created logo.png")
    except Exception as e:
        print(f"Error: {e}")

remove_background("public/images/logo.jpeg", "public/images/logo.png")
