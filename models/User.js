module.exports = function (sequelize, DataType) {
    var User = sequelize.define('User', {
      id: {
        autoIncrement: true,
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


//   module.exports = function (sequelize, Sequelize) {

//     var User = sequelize.define('user', {

//       id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },

//       firstname: {
//         type: Sequelize.STRING,
//         notEmpty: true
//       },

//       lastname: {
//         type: Sequelize.STRING,
//         notEmpty: true
//       },

//       username: {
//         type: Sequelize.TEXT
//       },

//       about: {
//         type: Sequelize.TEXT
//       },

//       email: {
//         type: Sequelize.STRING,
//         validate: {
//           isEmail: true
//         }
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       last_login: {
//         type: Sequelize.DATE
//       },
//       status: {
//         type: Sequelize.ENUM('active', 'inactive'),
//         defaultValue: 'active'
//       }


//     });

//     return User;

//   }