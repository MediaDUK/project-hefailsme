// var db = require("../models");
// Routes database get and posts
// =============================================================
module.exports = function (app) {
   //send email to database
  app.post('/email-subscription', (err, req, res) => {
    if (err) throw err

    // insert email into database with sequlize

    // on succesfull submission
    var success = true
    if (success) {
      res.send(200)
    }

  })

};
