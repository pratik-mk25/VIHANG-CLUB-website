import os
import subprocess
import json

pdf_dir = "Dcoment PDF"
output_file = "pdf_texts.json"

results = {}

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        filepath = os.path.join(pdf_dir, filename)
        # Convert to text
        cmd = ["pdftotext", filepath, "-"]
        try:
            output = subprocess.check_output(cmd, stderr=subprocess.STDOUT).decode("utf-8", errors="ignore")
            # Just take the first 1500 characters to get the gist
            results[filename] = output[:1500].strip().replace('\n', ' ')
            # Clean up extra spaces
            import re
            results[filename] = re.sub(' +', ' ', results[filename])
        except Exception as e:
            results[filename] = f"Error reading: {str(e)}"

with open(output_file, "w") as f:
    json.dump(results, f, indent=2)

print(f"Extracted text from {len(results)} PDFs to {output_file}")
