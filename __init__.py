from flask import Flask, render_template, request, make_response, session
import pymongo

app = Flask(__name__)

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://koolkusum:OpwS9i5kEXm7imJV@cluster0.x0pvfba.mongodb.net/?retryWrites=true&w=majority")


@app.route('/register',methods = ['POST'])
def register():
    dblist = client.list_database_names()
    mydb = client["user_info"]
    mycol = mydb["customers"]
    mydict = { "username": request.form['email'], "password": request.form['password'] }
    x = mycol.insert_one(mydict)
    make_response().set_cookie('username', request.form['email'])
    return render_template("mainpage.html", login_message="Welcome, " + request.form['email'])

@app.route('/register',methods = ['GET'])
def see_register():
   return render_template("signup.html")

@app.route('/login',methods = ['POST'])
def login():
    mydb = client["user_info"]
    collection = mydb["customers"]
    item_details = collection.find()
    print('dasljk')
    for item in item_details:
        if (item["username"] == request.form['email'] and
            item["password"] == request.form['password']):
            resp = make_response(render_template("mainpage.html", login_message="Welcome, " + request.form['email']))
            print('hello')
            resp.set_cookie('username', request.form['email'])
            session["username"] = request.form['email']
            return resp
    return render_template("login.html")

@app.route('/login',methods = ['GET'])
def see_login():
    print("alksjdlkasjd")
    return render_template("login.html")

if __name__ == '__main__':
    app.run()