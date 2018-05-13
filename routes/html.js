// var db = require("../models");
// Routes
// =============================================================
module.exports = function (app, db) {
  // home
  app.get('/', (req, res, next) => {
    res.render('home', {
      showTitle: true,
      helpers: {
        foo: function () {
          return 'foo.';
        }
      }
    });
  })
  // login
  app.get('/login', (req, res) => {
    res.render('login')
  })


  // about
  app.get('/about', (req, res) => {
    res.render('about')
  })

  // media
  app.get('/media', (req, res) => {
    res.render('media')
  })

  //merch
  app.get('/merch', (req, res) => {
    res.render('merch')
  })

  //tour + populate tour schedule
  app.get('/tour', (req, res) => {
    db.Tour.findAll().then(function (dbUser) {
      var events = {
        dbUser: dbUser
      }
      console.log(events)
      res.render('tour', events)
    })
  })
  
  // contact
  app.get('/contact', (req, res) => {
    res.render('contact')
  })
};
