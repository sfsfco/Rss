var Sequelize = require('sequelize');
var config = require('./config/config');


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