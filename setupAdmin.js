const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'balajiselva@1997',
  database: process.env.DB_NAME || 'panel'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);

  const password = 'adminpassword';
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    console.log('Hashed password:', hash);

    const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
    connection.query(query, ['admin@example.com', hash, 'admin'], (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return;
      }
      console.log('User inserted successfully');
      connection.end();
    });
  });
});
