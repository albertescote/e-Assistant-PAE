from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def index():
    os.system('./UiRobot.exe execute --file C:/Users/alber/OneDrive/Documents/UPC/Q8/PAE/ProcesoEnBlanco/project.json')
    return "Welcome to the course API"

if __name__ == "__main__":
    app.run(debug=True)