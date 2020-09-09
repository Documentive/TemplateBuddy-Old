import sqlite3

conn = sqlite3.connect("local.db")

cursor = conn.execute("SELECT * FROM resume_details")
row = cursor.fetchall()

print(row)
