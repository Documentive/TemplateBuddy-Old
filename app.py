# Import required libraries
from flask import Flask, request, render_template, redirect, flash, jsonify
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

@app.route("/signup", methods=['POST'])
def signup():
    """
    Signup (/signup) route
    Methods
    =======
    POST
        : Sign up a new user if account does not exist already
    """

    if request.method == 'POST':
        fullname = request.form['fullname']
        email = request.form['email']
        password = request.form['password']

        conn = sqlite3.connect('local.db')

        cursor = conn.execute(f'SELECT id FROM users WHERE email = "{email}"')
        row = cursor.fetchone()

        password = hashlib.sha512(password.encode())
        password = password.hexdigest()

        if(row != None):
            return jsonify({"icon": "error", "title": "Error", "text": "User with this email already exists!"})

        conn.execute(f'INSERT INTO users(name, email, password) VALUES("{fullname}", "{email}", "{password}")')
        conn.commit()

        conn.close()

        return jsonify({"icon": "success", "title": "Success", "text": "Signed up successfully! Login to continue!"})

@app.route('/login', methods=['POST'])
def login():
    """
    Login (/login) route
    Methods
    =======
    POST
        : Logs in a user if account exists
    """

    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        conn = sqlite3.connect('local.db')

        cursor = conn.execute(f'SELECT password FROM users WHERE email = "{email}"')
        row = cursor.fetchone()

        if(row == None):
            return jsonify({"icon": "error", "title": "Error", "text": "Account does not exist, sign up first!"})

        password = hashlib.sha512(password.encode())
        password = password.hexdigest()

        if(row[0] != password):
            return jsonify({"icon": "error", "title": "Error", "text": "Incorrect email or password!"})

        conn.close()

        return jsonify({"icon": "success", "title": "Success", "text": "Logged in successfully!!"})
