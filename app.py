# Import required libraries
from flask import Flask, request, render_template, redirect, flash, jsonify, session
import sqlite3
import hashlib
from werkzeug.utils import secure_filename

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

        conn.close()

        return jsonify(
            {"icon": "success", "title": "Success", "text": "Logged in successfully!!"}
        )

@app.route('/personal', methods=['GET', 'POST'])
def personal():

    if request.method == 'GET':
        uid = session['id']

        if(uid == -1):
            return redirect('/')

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
        values = list(dict(request.form).values())[0].split("name=")

        image = values[-2:]
        values = values[:-2]
        values = [value.split('-')[0].split("\r\n")[-2] for value in values]

        file = request.files['profile_picture']

        uid = session['id']
        firstname = values[0]
        middlename = values[1]
        lastname = values[2]
        email = values[3]
        mobile = values[4]
        address_1 = values[5]
        address_2 = values[6]
        city = values[7]
        state = values[8]
        zip = values[9]
        headline = values[10]
        github = values[11]
        linkedin = values[12]
        twitter = values[13]
        website = values[14]
        behance = values[15]
        dribble = values[16]
        summary = values[17]

        # conn = sqlite3.connect("local.db")
        #
        # cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        # row = cursor.fetchone()
        #
        # if row == None:
        #     conn.execute(f"""INSERT INTO resume_details(uid, firstname, middlename, lastname, email, mobile, address_1,
        #                  address_2, city, state, zip, profile_picture, headline,
        #                  github, linkedin, twitter, website, behance, dribble, summary) VALUES('{uid}', '{firstname}',
        #                  '{middlename}', '{lastname}', '{email}', '{mobile}', '{address_1}', '{address_2}',
        #                  '{city}', '{state}', '{zip}', 'test', '{headline}', '{github}', '{linkedin}', '{twitter}',
        #                  '{website}', '{behance}', '{dribble}', '{summary}')""")
        # else:
        #     conn.execute(f"""UPDATE resume_details SET firstname='{firstname}', middlename='{middlename}', lastname='{lastname}',
        #                  email='{email}', mobile='{mobile}', address_1='{address_1}', address_2='{address_2}', city='{city}',
        #                  state='{state}', zip='{zip}', profile_picture='test', headline='{headline}', github='{github}',
        #                  linkedin='{linkedin}', twitter='{twitter}', website='{website}', behance='{behance}', dribble='{dribble}',
        #                  summary='{summary}' WHERE uid={uid}""")
        #
        # conn.commit()
        #
        # conn.close()

        return jsonify({"icon": "success", "title": "Success", "text": "Data updated successfully!"})

@app.route('/education', methods=['GET', 'POST'])
def education():

    if request.method == 'GET':
        return render_template('education.html')

    if request.method == 'POST':
        uid = session['id']
        institute_names = request.form['institute_names']
        cities = request.form['cities']
        countries = request.form['countries']
        degrees = request.form['degrees']
        fields_of_study = request.form['fields_of_study']
        start_dates = request.form['start_dates']
        end_dates = request.form['end_dates']
        grade_types = request.form['grade_types']
        grades = request.form['grades']

        conn = sqlite3.connect("local.db")

        conn.execute(f"""UPDATE resume_details SET institute_names='{institute_names}', cities='{cities}',
                     countries='{countries}', degrees='{degrees}', fields_of_study='{fields_of_study}',
                     start_dates='{start_dates}', end_dates='{end_dates}', grade_types='{grade_types}',
                     grades='{grades}' WHERE uid={uid}""")

        conn.commit()

        conn.close()

        return jsonify({"icon": "success", "title": "Success", "text": "Data updated successfully!"})

@app.route('/logout', methods=['GET'])
def logout():

    if request.method == 'GET':
        session['id'] = -1

        return jsonify({"icon": "success", "title": "Success", "text": "Logged out successfully!"})
