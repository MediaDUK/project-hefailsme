'use strict';
require('dotenv').config();
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];
var db = {};


if (config.use_env_variable) {

  console.log('CONNECTING TO REMOTE')
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log('CONNECTING TO LOCAL')
  // var sequelize = new Sequelize(process.env.JAWSDB_DATABASE_NAME, 
  //                               process.env.JAWSDB_USERNAME, process.env.JAWSDB_PASSWORD, {
  //   host: '127.0.0.1',
  //   port: process.env.JAWSDB_PORT,
  //   dialect: 'mysql'
  // });
  // var sequelize = new Sequelize('jgy2mx5qwhjczyqk', 'lv2n8lbwqo7dqjok', 'azqw5bjnl3ukmgbs', {
  //   host: 'localhost',
  //   port: process.env.JAWSDB_PORT,
  //   dialect: 'mysql',
  // });


}

var sequelize = new Sequelize('mysql://lv2n8lbwqo7dqjok:drl5hm5kwxb9ikz7@i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jgy2mx5qwhjczyqk');





// console.log("GET TO KNOW THIS \n\n\n", sequelize)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    console.log(model.name)
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