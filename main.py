from flask import Flask


nothing = False


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == 'main':
    app.run()