const pg = require('pg');
require('dotenv').config();
const { Pool, Client } = pg;
 
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})
 
async function getUsers() {
  try{
    const res = await pool.query('SELECT * FROM userdata');
    return res.rows;
  }
  catch(err) {
    console.log('Err:' ,err)
  }
}

getUsers();
getUsers();
getUsers();

/*async function test () {
  const users = await getUsers();
  console.log('Users:', users);
}

test();*/

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})
 
async function connectDB() {
  try{
    await client.connect()
    console.log('Database is connected');

    const res = await client.query('SELECT * FROM userdata');
    console.log('Query executed');
    console.log('Number of rows:', res.rowCount);
    console.log('Results:', res.rows);
  }

  catch(err) {
    console.log('Error:', err);
  }finally {
     await client.end();
     console.log('Connection ended');
  }
};

module.exports = pool ;