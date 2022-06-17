var Sequelize = require('sequelize');
const mysql = require("mysql2");
var config = require('./config/config');

//await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
const mysqlConnection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
});

mysqlConnection.query(
  `CREATE DATABASE IF NOT EXISTS ${config.database}`,
  function (err, results) {
    console.log('Connected to MySQL database');
    
  }
);

// Close the connection
mysqlConnection.end();

const database = new Sequelize(
  config.database, // name database
  config.user, // user database
  config.password, // password database
  {
    host: config.host, // host database
    dialect: config.dialect, // mariadb / sqlite / postgres
    logging: false
  },
);

database.sync()

module.exports = database;