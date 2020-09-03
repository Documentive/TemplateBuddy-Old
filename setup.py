# Import required libraries
import sqlite3

# Setup connection to db
conn = sqlite3.connect("local.db")

# Create table users
conn.execute(
    """CREATE TABLE users(
                id INT PRIMARY_KEY AUTO_INCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL)"""
)

# Close the connection
conn.close()
