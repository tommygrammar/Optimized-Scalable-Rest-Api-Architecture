# app.py
from flask import Flask
import ctypes


app = Flask(__name__)

# Load the shared library compiled by C
lib = ctypes.CDLL('path/to/sm.so')
lib.read_from_shared_memory.restype = ctypes.c_char_p

@app.route('/read', methods=['POST'])
def read_shared_memory():
    # Call the C function to read data from shared memory

    raw_data = lib.read_from_shared_memory()
    return raw_data, 200

if __name__ == '__main__':
    app.run(port=5000)
