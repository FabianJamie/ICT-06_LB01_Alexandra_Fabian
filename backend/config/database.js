import mysql from "mysql2";
 
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1001Elfi@',
  database: 'pos_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

export default db;