require('dotenv').config();
const express = require('express');
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const PORT = process.env.NODE_PORT || 8080
const db = require('./models')

const app = express();

// Configs 
app.set('port', PORT)
app.set('view engine', '.hbs')
app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.engine('.hbs', hb({
  defaultLayout: 'main',
  extname: '.hbs'
}))

<<<<<<< HEAD
// remote connection string for JawDB
// var sequelize = new Sequelize('mysql://lv2n8lbwqo7dqjok:azqw5bjnl3ukmgbs@i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jgy2mx5qwhjczyqk');
=======
>>>>>>> develop







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
});
