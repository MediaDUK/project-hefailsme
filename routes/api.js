// var db = require("../models");
// Routes database get and posts
// =============================================================
module.exports = function (app) {
   //send email to database
  app.post('/email-subscription', (err, req, res) => {
    if (err) throw err
    // insert email into database with sequelize

    // on succesfull submission
    var success = true
    if (success) {
      res.send(200)
    }

  })


  // store submissions from contact page in database
  app.post('/contact-submit', (req, res) => {
    console.log("newSubmission: " + req.body)
    res.json(true)
  })
}
