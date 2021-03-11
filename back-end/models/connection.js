const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const { MYSQL_USER, MYSQL_PASSWORD, HOSTNAME } = process.env;

console.log(MYSQL_USER, MYSQL_PASSWORD, HOSTNAME);

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

const connection = mysql.createPool(config);

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users;');
  console.log(users);
};

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  // console.log(products);
  return products;
};

// getAllProducts();

// getAll();

module.exports = connection;
