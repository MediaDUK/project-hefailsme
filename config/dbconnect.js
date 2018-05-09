var Sequelize = require("sequelize");

var config = new Sequelize("test_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

module.exports = config;
