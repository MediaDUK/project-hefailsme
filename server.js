require('dotenv').config();
const express = require('express');
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const errorHandler = require('error-handler');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const PORT = process.env.NODE_PORT || 3000
const db = require('./models')

const app = express();
// const sequelize = new Sequelize()

// Configs 
app.set('port', PORT)
app.set('view engine', '.hbs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.engine('.hbs', hb({
  defaultLayout: 'main',
  extname: '.hbs'
}))



// Routes
// =============================================================
// require("./routes/api.js")(app);
// require("./routes/html.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
    force: true
  }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
