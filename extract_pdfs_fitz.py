import os
import fitz
import json
import re

pdf_dir = "Dcoment PDF"
output_file = "pdf_texts_fitz.json"

results = {}

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        filepath = os.path.join(pdf_dir, filename)
        try:
            doc = fitz.open(filepath)
            text = ""
            for page in doc:
                text += page.get_text()
            # Clean up
            text = text[:1500].strip().replace('\n', ' ')
            text = re.sub(' +', ' ', text)
            results[filename] = text
        except Exception as e:
            results[filename] = f"Error reading: {str(e)}"

with open(output_file, "w") as f:
    json.dump(results, f, indent=2)

print(f"Extracted text from {len(results)} PDFs using PyMuPDF")
