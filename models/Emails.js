module.exports = function (sequelize, DataType) {
  var Emails = sequelize.define('Emails', {
    email: {
      type: DataType.STRING,
      field: 'email'
    }
  });
  return Emails;
};
