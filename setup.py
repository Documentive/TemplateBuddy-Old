# Import required libraries
import sqlite3

# Setup connection to db
conn = sqlite3.connect("local.db")

# Create table - users
conn.execute(
    """CREATE TABLE users(
                id INT PRIMARY_KEY AUTO_INCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
    )"""
)

# Create table - resume_details
conn.execute(
    """CREATE TABLE resume_details(
        id INT PRIMARY_KEY AUTO_INCREMENT,
        uid INT NOT NULL,
        firstname TEXT NULL,
        middlename TEXT NULL,
        lastname TEXT NULL,
        email TEXT NULL,
        mobile TEXT NULL,
        address_1 TEXT NULL,
        address_2 TEXT NULL,
        city TEXT NULL,
        state TEXT NULL,
        zip TEXT NULL,
        profile_picture TEXT NULL,
        headline TEXT NULL,
        github TEXT NULL,
        linkedin TEXT NULL,
        twitter TEXT NULL,
        website TEXT NULL,
        behance TEXT NULL,
        dribble TEXT NULL,
        summary TEXT NULL
    )"""
)

# Close the connection
conn.close()
