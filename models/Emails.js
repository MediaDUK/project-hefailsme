
// var db = require("../models");
module.exports = function (sequelize, DataType) {
  var Email = sequelize.define('email', {
    email: {
      type: DataType.STRING,
      field: 'email'
    }
  });
  return Email;
};
