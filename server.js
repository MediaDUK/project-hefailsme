require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const hb = require('express-handlebars');
const PORT = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))
app.engine('.hbs', hb({
    defaultLayout: 'main',
    extname: '.hbs'
  }))
  .set('view engine', '.hbs')
  .get('/', (req, res, next) => {
    res.render('home', {
      showTitle: true,
      helpers: {
        foo: function () {
          return 'foo.';
        }
      }
    });
  })
  .get('/', function (req, res, next) {
    res.render('home', {
      showTitle: true,
      // Override `foo` helper only for this rendering.
      helpers: {
        foo: function () {
          return 'foo.';
        }
      }
    });
  })
  .get('/about', (req, res) => {
    res.render('about')
  })
  .get('/media', (req, res) => {
    res.render('media')
  })
  .get('/merch', (req, res) => {
    res.render('merch')
  })
  .get('/tour', (req, res) => {
    res.render('tour')
  })
  .get('/contact', (req, res) => {
    res.render('contact')
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))