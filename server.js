require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const errorHandler = require('error-handler');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const PORT = process.env.NODE_PORT || 8080
// Configs 
app.set('port', PORT)
app.set('view engine', '.hbs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.engine('.hbs', hb({
  defaultLayout: 'main',
  extname: '.hbs'
}))

// remote connection string for JawDB
var sequelize = new Sequelize('mysql://lv2n8lbwqo7dqjok:azqw5bjnl3ukmgbs@i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jgy2mx5qwhjczyqk');

// get all emails
sequelize
  .query(
    'SELECT * FROM emails'
  )
  .then(emails => {
    emails.forEach((row, i) => {
      console.log(row[i].email)
    });
  })



// making model of email table in JawBD 
// var Email = sequelize.define('email', {
//   email: {
//     type: Sequelize.STRING,
//     field: 'email' // Will result in an attribute that is firstName when user facing but first_name in the database
//   }
// });
// var emailToSend = 'example@site.com'
// sequelize.sync()
//   .then( () => Email.create({
//     email: emailToSend
//   }))
//   .then(email => {
//     console.log(email.toJSON());
//   });




// Routes
// =============================================================
require("./routes/api.js")(app);
require("./routes/html.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function () {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// });
