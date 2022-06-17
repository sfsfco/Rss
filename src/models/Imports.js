
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../database');

var Imports = sequelize.define('imports', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    field: 'importDate',
    type: Sequelize.DATE,
  },

  rawContent: Sequelize.TEXT,
});

module.exports = Imports