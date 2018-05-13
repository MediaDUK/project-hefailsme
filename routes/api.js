// Routes database get and posts
// =============================================================
module.exports = function (app, db) {
  //send email to database
  app.post('/email-subscription', (err, req, res) => {
    if (err) throw err
    // insert email into database with sequelize

    // on succesfull submission
    var success = true
    if (success) {
      res.send(200)
    }


    //sends email to db
    // var emailToSend = 'example@site.com'
    // sequelize.sync()
    //   .then( () => Email.create({
    //     email: emailToSend
    //   }))
    //   .then(email => {
    //     console.log(email.toJSON());
    //   });


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


  // // store submissions from contact page in database
  // app.post('/contact-submit', (req, res) => {
  //   console.log("newSubmission: " + req.body)
  //   res.json(true)
  // })
}

