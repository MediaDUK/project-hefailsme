module.exports = function (sequelize, DataType) {
    var User = sequelize.define('User', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        field: 'id',
        allowNull: false
      },
      username: {
        type: DataType.STRING,
        field: 'username',
        allowNull: false
      },
      password: {
        type: DataType.STRING,
        field: 'password',
        allowNull: false
      }
      });
    return User;
  };