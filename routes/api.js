// Routes database get and posts
// =============================================================
module.exports = function (app) {
  var Emails = app.get('models').Emails;
  //send email to database
  app.post('/email-subscription', function (req, res) {

    console.log('EMAIL \n\n\n\n' + req.body.email)
    Emails.create({
        email: req.body[0]
      })
      .then( function(email) {
          res.sendStatus(200)
      })
      .catch(function (err) {
        console.log('GENERAL ERROR ======')
        console.log(err)
        // if (err.value == null) {
        //   res.sendStatus(400)
        // }
        // console.log(err)
      })
      // Sequelize.ValidationError
      // .catch(SequelizeValidationError, function (err) {
      //   console.log('SequelizeValidationError: ERROR ======')
      //   console.log(err)
      //  });
        
    // // get all emails
    // db.Emails.query(
    //     'SELECT * FROM emails'
    //   )
    //   .then(emails => {
    //     emails.forEach((row, i) => {
    //       console.log(row[i].email)
    //     });
    //   })


  })


  // store submissions from contact page in database
  app.post('/contact-submit', (req, res) => {
    console.log("newSubmission: " + req.body)
    res.json(true)
  })
}