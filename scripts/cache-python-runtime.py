"""Cache the pinned runtime for optional browser smoke tests; TLS stays verified."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import sys
import urllib.request

destination = Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/zerotocode-pyodide")
destination.mkdir(parents=True, exist_ok=True)
files = ["pyodide.js", "pyodide.asm.js", "pyodide.asm.wasm", "python_stdlib.zip", "pyodide-lock.json"]


def download(name):
    with urllib.request.urlopen("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/" + name, timeout=60) as response:
        content = response.read()
    (destination / name).write_bytes(content)
    return name, len(content)


with ThreadPoolExecutor(max_workers=4) as pool:
    for name, length in pool.map(download, files):
        print(f"{name}: {length} bytes")
