from flask import Flask
import os

app = Flask(__name__)

@app.route('/sync', methods = ['POST'])
def sync():
    os.system('./UiRobot.exe execute --file {path to UiPath DownloadPDF project}/project.json')

@app.route('/sign', methods = ['POST'])
def sign():
    os.system('./UiRobot.exe execute --file {path to UiPath SignPDF project}/project.json')

if __name__ == "__main__":
    app.run(debug=True)
