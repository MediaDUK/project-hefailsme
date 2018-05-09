//going to try to use sequelize with passport but may end up changing it mongo due to better documentation for passport and mongo vs passport and sql.

const Sequelize = require ('sequelize');
const config = require ('../config/dbconnect'); 

//for password hashing. even tho even hackers prolly wont want to get into our database.
const bcrypt = require('bcryptjs');


// defining object schema for database
var dbSync = config.define('test', {
    username: {
        type: Sequelize.STRING 
    },
    password: {
        type: Sequelize.STRING 
    },
    email: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    }
});

dbSync.sync();

module.exports = dbSync

var User = module.exports - sequelize.model('User', dbSync);
dbSync.sync()

module.exports.getUserByUsername = function(username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}

