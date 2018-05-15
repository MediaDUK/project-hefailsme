module.exports = function (sequelize, DataType) {
  var Emails = sequelize.define('Emails', {
    email: {
      type: DataType.STRING,
      field: 'email',
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
  return Emails;
};