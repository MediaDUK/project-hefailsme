$(document).ready(function () {

  // popup window on homepage
  function startPopup() {
    var time = 5000
    setTimeout(function () {
      var $EmailModal = $('#emailSubscription')
      EmailModal.modal('show')
    }, time);
  }
  startPopup()

  // posting the data to JAW_DB on heroku
  function postEmail(email_to_post) {
    console.log('Posting to database: ' + email_to_post)
    // create ajax object
    var request = $.ajax({
      url: '/email-subscription',
      method: "POST",
      data: {
        email: email_to_post
      },
      dataType: "html"
    });

    // handle success
    request.done(function (msg) {
      console.log('Message from post response: ' + msg)
      // close modal after success from jawsbd posts
      var $EmailModal = $('#emailSubscription')
      EmailModal.modal('hide')
    });

    // handle error
    request.fail(function (jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
  }

  // click event for email form / button
  $('#subscriptionButton').on('click', function (event) {
    event.preventDefault()
    var $email = $('#email')
    var emailData = $email.val().trim() // string
    postEmail(emailData)
  });



  // click event for contact form / button
  $("#contact-submit").on("click", function (event) {
    event.preventDefault()

    // grab the form elements
    var newSubmission = {
      name: $("#exampleInputName2").val().trim(),
      email: $("#exampleInputEmail2").val().trim(),
      message: $("#exampleInputMessage2").val().trim()
    }

    console.log(newSubmission)

    $.post("/contact-submit", newSubmission, function (data) {
      // Clear the form when submitting
      if (data) {
        console.log("success")
        $("#exampleInputName2").val("")
        $("#exampleInputEmail2").val("")
        $("#exampleInputMessage2").val("")
      }
    })
  })
})
