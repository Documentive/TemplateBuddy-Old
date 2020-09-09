# Import required libraries
from flask import Flask, request, render_template, redirect, flash, jsonify, session
import sqlite3
import hashlib

# Instantiate flask app
app = Flask(__name__)

# Basic config for flask app
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.secret_key = "my-secret-key"
app.config["SESSION_TYPE"] = "filesystem"


@app.route("/", methods=["GET"])
def index():
    """
    Index (/) route
    Methods
    =======
    GET
        : Get index.html (main file for VitaBoard)
    """

    if request.method == "GET":
        """
        Returns index.html (file which contains template for login/signup page)
        """

        # Return index.html from templates
        return render_template("index.html")


@app.route("/signup", methods=["POST"])
def signup():
    """
    Signup (/signup) route
    Methods
    =======
    POST
        : Sign up a new user if account does not exist already
    """

    if request.method == "POST":
        fullname = request.form["fullname"]
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f'SELECT id FROM users WHERE email = "{email}"')
        row = cursor.fetchone()

        password = hashlib.sha512(password.encode())
        password = password.hexdigest()

        if row != None:
            return jsonify(
                {
                    "icon": "error",
                    "title": "Error",
                    "text": "User with this email already exists!",
                }
            )

        conn.execute(
            f'INSERT INTO users(name, email, password) VALUES("{fullname}", "{email}",'
            f' "{password}")'
        )
        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Signed up successfully! Login to continue!",
            }
        )


@app.route("/login", methods=["POST"])
def login():
    """
    Login (/login) route
    Methods
    =======
    POST
        : Logs in a user if account exists
    """

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f'SELECT id, password FROM users WHERE email = "{email}"')
        row = cursor.fetchone()

        if row == None:
            return jsonify(
                {
                    "icon": "error",
                    "title": "Error",
                    "text": "Account does not exist, sign up first!",
                }
            )

        password = hashlib.sha512(password.encode())
        password = password.hexdigest()

        if row[1] != password:
            return jsonify(
                {
                    "icon": "error",
                    "title": "Error",
                    "text": "Incorrect email or password!",
                }
            )

        session['id'] = row[0]

        print(row)
        print(session['id'])

        conn.close()

        return jsonify(
            {"icon": "success", "title": "Success", "text": "Logged in successfully!!"}
        )

@app.route('/personal', methods=['GET', 'POST'])
def personal():

    if request.method == 'GET':
        uid = session['id']

        print(uid)

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template('personaldetails.html')

        print(row[20])

        return render_template('personaldetails.html', firstname=row[2], middlename=row[3], lastname=row[4],
                               email=row[5], mobile=row[6], address_1=row[7], address_2=row[8], city=row[9],
                               state=row[10], zip=row[11], headline=row[13], github=row[14], linkedin=row[15],
                               twitter=row[16], website=row[17], behance=row[18], dribble=row[19], summary=row[20])

    elif request.method == 'POST':
        uid = session['id']
        firstname = request.form['firstname']
        middlename = request.form['middlename']
        lastname = request.form['lastname']
        email = request.form['email']
        mobile = request.form['mobile']
        address_1 = request.form['address_1']
        address_2 = request.form['address_2']
        city = request.form['city']
        state = request.form['state']
        zip = request.form['zip']
        headline = request.form['headline']
        github = request.form['github']
        linkedin = request.form['linkedin']
        twitter = request.form['twitter']
        website = request.form['website']
        behance = request.form['behance']
        dribble = request.form['dribble']
        summary = request.form['summary']

        conn = sqlite3.connect("local.db")

        conn.execute(f"""INSERT INTO resume_details(uid, firstname, middlename, lastname, email, mobile, address_1,
                     address_2, city, state, zip, profile_picture, headline,
                     github, linkedin, twitter, website, behance, dribble, summary) VALUES('{uid}', '{firstname}',
                     '{middlename}', '{lastname}', '{email}', '{mobile}', '{address_1}', '{address_2}',
                     '{city}', '{state}', '{zip}', 'test', '{headline}', '{github}', '{linkedin}', '{twitter}',
                     '{website}', '{behance}', '{dribble}', '{summary}')""")

        conn.commit()

        conn.close()

        return jsonify({"icon": "success", "title": "Success", "text": "Data updated successfully!"})
