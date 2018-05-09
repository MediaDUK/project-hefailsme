require('dotenv').config();
const express = require('express');
const path = require('path');
const hb = require('express-handlebars');

const cookieParser = require('cookie-parser');
const bodyParser = require ('body-parser');
const flash = require ('connect-flash');
const session = require ('express-session');
const expressValidator = require ('express-validator');
const mysql = require ('mysql2');
const Sequelize = require ('sequelize');
const passport = require ('passport');
const localStragety = require ('passport-local');

const PORT = process.env.PORT || 5000;


var users = require('./routes/users.js')

//api and html routes
var routes = require ('./routes/index');
var routes = require ('./routes/users');

//app init
var app = express();
app.use(express.static(__dirname + "/public"));

//view engine
// app.set('views', path.join(_dirname, 'views'));
// app.engine('.hbs', hb({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('view engine', '.hbs');

app.engine('.hbs', hb({ defaultLayout: 'main', extname: '.hbs' }))
.set('view engine', 'hbs')
.get('/', (req, res) => {
  res.render('home')
})

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

//static drive
app.use(session({
  secret: 'secret', 
  saveUninitialized: true,
  resave: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//express validation
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';

    }
    return {
      param : formParam,
      msg : msg,
      value : value
    };
  }
}));
//connect flash
app.use(flash());

//global variables
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.local.error = req.flash('error');
  res.local.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', users);

//assigning port
app.set('port', (process.env.PORT || 5000));
// actual function to start server
app.listen(app.get('port'), function(){
  console.log('Server started on port ' +app.get('port'));

});






