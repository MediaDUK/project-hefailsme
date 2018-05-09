'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config.port, config.dialect);
// }

// const sequelize = new Sequelize('mysql://lv2n8lbwqo7dqjok:azqw5bjnl3ukmgbs@i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jgy2mx5qwhjczyqk');

const sequelize = new Sequelize(process.env.JAWSDB_DATABASE_NAME, process.env.JAWSDB_USERNAME, process.env.JAWSDB_PASSWORD, {
  host: process.env.JAWSDB_HOST,
  dialect: 'mysql'
});


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;