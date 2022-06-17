
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../database');

var Articles = sequelize.define('articles', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  externalId: Sequelize.STRING,
  createdAt: {
    field: 'importDate',
    type: Sequelize.DATE,
  },
  title: Sequelize.TEXT,
  description: Sequelize.TEXT,
  publicationDate: Sequelize.STRING,
  link: Sequelize.TEXT,
  mainPicture: Sequelize.TEXT,
});

module.exports = Articles