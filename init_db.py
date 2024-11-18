import sqlite3

# Create or open a connection to the database
conn = sqlite3.connect('expenses.db')

# Create the 'expenses' table if it doesn't already exist
conn.execute('''
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        category TEXT NOT NULL
    )
''')

# Close the database connection
conn.close()