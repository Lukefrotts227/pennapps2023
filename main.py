from flask import Flask
from flask_mongoengine import MongoEngine


# Lfrotts DXYpIbztQfUBk2UH
# koolkusum OpwS9i5kEXm7imJV

#  mongodb+srv://<username>:<password>@cluster0.x0pvfba.mongodb.net/?retryWrites=true&w=majority

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'



app.config['MONGODB_SETTINGS'] = {
    'db': 'your_database',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)



class User(db.Document):
    name = db.StringField()
    email = db.StringField()


if __name__ == 'main':
    app.run()