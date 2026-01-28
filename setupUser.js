const bcrypt = require('bcrypt');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);

  const email = 'user@example.com';
  const password = 'userpassword';
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    console.log('Hashed password:', hash);

    const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
    connection.query(query, [email, hash, 'user'], (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return;
      }
      console.log('User inserted successfully');
      connection.end();
    });
  });
});
