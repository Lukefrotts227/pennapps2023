from flask import Flask
from flask_mongoengine import MongoEngine


# Lfrotts DXYpIbztQfUBk2UH
# koolkusum OpwS9i5kEXm7imJV

#  mongodb+srv://<username>:<password>@cluster0.x0pvfba.mongodb.net/?retryWrites=true&w=majority

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == 'main':
    app.run()