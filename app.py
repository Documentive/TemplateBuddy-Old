# Import required libraries
from flask import Flask, request, render_template, redirect, flash, jsonify, session
import sqlite3
import hashlib
from werkzeug.utils import secure_filename
import os
import shutil

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

        session["id"] = row[0]

        conn.close()

        return jsonify(
            {"icon": "success", "title": "Success", "text": "Logged in successfully!!"}
        )


@app.route("/personal", methods=["GET", "POST"])
def personal():

    if request.method == "GET":
        uid = session["id"]

        if uid == -1:
            return redirect("/")

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template("personaldetails.html")

        return render_template(
            "personaldetails.html",
            firstname=row[2],
            middlename=row[3],
            lastname=row[4],
            email=row[5],
            mobile=row[6],
            address_1=row[7],
            address_2=row[8],
            city=row[9],
            state=row[10],
            zip=row[11],
            profile=row[12],
            headline=row[13],
            github=row[14],
            linkedin=row[15],
            twitter=row[16],
            website=row[17],
            behance=row[18],
            dribble=row[19],
            summary=row[20],
        )

    elif request.method == "POST":
        uid = session["id"]
        firstname = request.form["firstname"]
        middlename = request.form["middlename"]
        lastname = request.form["lastname"]
        email = request.form["email"]
        mobile = request.form["mobile"]
        address_1 = request.form["address_1"]
        address_2 = request.form["address_2"]
        city = request.form["city"]
        state = request.form["state"]
        zip = request.form["zip"]
        headline = request.form["headline"]
        github = request.form["github"]
        linkedin = request.form["linkedin"]
        twitter = request.form["twitter"]
        website = request.form["website"]
        behance = request.form["behance"]
        dribble = request.form["dribble"]
        summary = request.form["summary"]

        file = request.files["profile_picture"]

        folder = "static/images/profile_pictures/" + str(session["id"])

        if os.path.exists(folder):
            shutil.rmtree(folder)

        os.mkdir(folder)

        filename = secure_filename(file.filename)
        filename = os.path.join(
            folder, str(session["id"]) + "." + filename.split(".")[1]
        )

        file.save(filename)

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, firstname, middlename, lastname, email, mobile, address_1,
                         address_2, city, state, zip, profile_picture, headline,
                         github, linkedin, twitter, website, behance, dribble, summary) VALUES('{uid}', '{firstname}',
                         '{middlename}', '{lastname}', '{email}', '{mobile}', '{address_1}', '{address_2}',
                         '{city}', '{state}', '{zip}', '{filename}', '{headline}', '{github}', '{linkedin}', '{twitter}',
                         '{website}', '{behance}', '{dribble}', '{summary}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET firstname='{firstname}', middlename='{middlename}', lastname='{lastname}',
                         email='{email}', mobile='{mobile}', address_1='{address_1}', address_2='{address_2}', city='{city}',
                         state='{state}', zip='{zip}', profile_picture='{filename}', headline='{headline}', github='{github}',
                         linkedin='{linkedin}', twitter='{twitter}', website='{website}', behance='{behance}', dribble='{dribble}',
                         summary='{summary}' WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )


@app.route("/education", methods=["GET", "POST"])
def education():

    if request.method == "GET":
        uid = session["id"]

        if uid == -1:
            return redirect("/")

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template("education.html", has_data=False)

        institute_names = row[21].split("~~~")[:-1]
        cities = row[22].split("~~~")[:-1]
        countries = row[23].split("~~~")[:-1]
        degrees = row[24].split("~~~")[:-1]
        fields_of_study = row[25].split("~~~")[:-1]
        start_dates = row[26].split("~~~")[:-1]
        end_dates = row[27].split("~~~")[:-1]
        grade_types = row[28].split("~~~")[:-1]
        grades = row[29].split("~~~")[:-1]

        return render_template(
            "education.html",
            has_data=True,
            institute_names=institute_names,
            cities=cities,
            countries=countries,
            degrees=degrees,
            fields_of_study=fields_of_study,
            start_dates=start_dates,
            end_dates=end_dates,
            grade_types=grade_types,
            grades=grades,
        )

    if request.method == "POST":
        uid = session["id"]
        institute_names = request.form["institute_names"]
        cities = request.form["cities"]
        countries = request.form["countries"]
        degrees = request.form["degrees"]
        fields_of_study = request.form["fields_of_study"]
        start_dates = request.form["start_dates"]
        end_dates = request.form["end_dates"]
        grade_types = request.form["grade_types"]
        grades = request.form["grades"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, institute_names, cities, countries, degrees, fields_of_study,
                         start_dates, end_dates, grade_types, grades) VALUES('{uid}', '{institute_names}', '{cities}',
                         '{countries}', '{degrees}', '{fields_of_study}', '{start_dates}', '{end_dates}', '{grade_types}', '{grades}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET institute_names='{institute_names}', cities='{cities}',
                         countries='{countries}', degrees='{degrees}', fields_of_study='{fields_of_study}',
                         start_dates='{start_dates}', end_dates='{end_dates}', grade_types='{grade_types}',
                         grades='{grades}' WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )


@app.route("/experience", methods=["GET", "POST"])
def experience():

    if request.method == "GET":
        uid = session["id"]

        if uid == -1:
            return redirect("/")

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template("experience.html", has_data=False)

        job_titles = row[30].split("~~~")[:-1]
        companies = row[31].split("~~~")[:-1]
        cities_exp = row[32].split("~~~")[:-1]
        countries_exp = row[33].split("~~~")[:-1]
        start_dates_exp = row[34].split("~~~")[:-1]
        end_dates_exp = row[35].split("~~~")[:-1]
        description = row[36].split("~~~")[:-1]

        return render_template(
            "experience.html",
            has_data=True,
            job_titles=job_titles,
            companies=companies,
            cities_exp=cities_exp,
            countries_exp=countries_exp,
            start_dates_exp=start_dates_exp,
            end_dates_exp=end_dates_exp,
            description=description,
        )

    elif request.method == "POST":
        uid = session["id"]
        job_titles = request.form["job_titles"]
        companies = request.form["companies"]
        cities_exp = request.form["cities_exp"]
        countries_exp = request.form["countries_exp"]
        start_dates_exp = request.form["start_dates_exp"]
        end_dates_exp = request.form["end_dates_exp"]
        description = request.form["description"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, job_titles, companies, cities_exp, countries_exp,
                         start_dates_exp, end_dates_exp, description)
                         VALUES('{uid}', '{job_titles}', '{companies}',
                         '{cities_exp}', '{countries_exp}', '{start_dates_exp}', '{end_dates_exp}',
                         '{description}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET job_titles='{job_titles}', companies='{companies}',
                         cities_exp='{cities_exp}', countries_exp='{countries_exp}',
                         start_dates_exp='{start_dates_exp}', end_dates_exp='{end_dates_exp}',
                         description='{description}' WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )


@app.route("/skills", methods=["GET", "POST"])
def skills():

    if request.method == "GET":
        uid = session["id"]

        if uid == -1:
            return redirect("/")

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template("skills.html", has_data=False)

        skills = row[37].split("~~~")[:-1]

        return render_template("skills.html", has_data=True, skills=skills)

    elif request.method == "POST":
        uid = session["id"]
        skill_names = request.form["skill_names"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, skill_names)
                         VALUES('{uid}', '{skill_names}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET skill_names='{skill_names}' WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )


@app.route("/projects", methods=["GET", "POST"])
def projects():

    if request.method == "GET":
        uid = session["id"]

        if uid == -1:
            return redirect("/")

        conn = sqlite3.connect("local.db")
        cursor = conn.execute(f"SELECT * FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        conn.close()

        if row == None:
            return render_template("projects.html", has_data=False)

        project_title = row[38].split("~~~")[:-1]
        description_proj = row[39].split("~~~")[:-1]
        start_dates_proj = row[40].split("~~~")[:-1]
        end_dates_proj = row[41].split("~~~")[:-1]

        return render_template(
            "projects.html",
            has_data=True,
            project_title=project_title,
            description_proj=description_proj,
            start_dates_proj=start_dates_proj,
            end_dates_proj=end_dates_proj,
        )
    elif request.method == "POST":
        uid = session["id"]
        project_title = request.form["project_title"]
        description_proj = request.form["description_proj"]
        start_dates_proj = request.form["start_dates_proj"]
        end_dates_proj = request.form["end_dates_proj"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, project_title, description_proj,
                        start_dates_proj, end_dates_proj)
                        VALUES('{uid}', '{project_title}', '{description_proj}',
                        '{start_dates_proj}', '{end_dates_proj}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET project_title='{project_title}',
                        description_proj='{description_proj}', start_dates_proj='{start_dates_proj}',
                        end_dates_proj='{end_dates_proj}' WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )


@app.route("/additional", methods=["GET"])
def additional():

    if request.method == "GET":
        return render_template("additional.html")


@app.route("/courses", methods=['POST'])
def courses():

    if request.method == 'POST':
        uid = session["id"]
        course_names = request.form["course_names"]
        issuers = request.form["issuers"]
        issues_on_dates = request.form["issues_on_dates"]

        conn = sqlite3.connect("local.db")

        cursor = conn.execute(f"SELECT id FROM resume_details WHERE uid={uid}")
        row = cursor.fetchone()

        if row == None:
            conn.execute(
                f"""INSERT INTO resume_details(uid, course_names, issuers, issues_on_dates)
                        VALUES('{uid}', '{course_names}', '{issuers}',
                        '{issues_on_dates}')"""
            )
        else:
            conn.execute(
                f"""UPDATE resume_details SET course_names='{course_names}',
                        issuers='{issuers}', issues_on_dates='{issues_on_dates}'
                        WHERE uid={uid}"""
            )

        conn.commit()

        conn.close()

        return jsonify(
            {
                "icon": "success",
                "title": "Success",
                "text": "Data updated successfully!",
            }
        )

@app.route("/logout", methods=["GET"])
def logout():

    if request.method == "GET":
        session["id"] = -1

        return jsonify(
            {"icon": "success", "title": "Success", "text": "Logged out successfully!"}
        )
