require('dotenv').config();
const express = require('express');
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const passport = require('passport')
const session = require('express-session')
const PORT = process.env.PORT || 8080
const db = require('./models')



const app = express();

// middleware
app.set('port', PORT)
app.set('view engine', '.hbs')
app.use(morgan('combined'))
// use app setting to call models from 
app.set('models', require('./models'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true // session secret
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(express.static(__dirname + '/public'))
app.engine('.hbs', hb({
  defaultLayout: 'main',
  extname: '.hbs'
}))








// Routes
// =============================================================
require("./routes/api.js")(app, db);
require("./routes/html.js")(app, db);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
  });
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")

});