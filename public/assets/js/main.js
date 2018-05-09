$(document).ready(function() {

  // popup window on homepage
  function startPopup(){
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
      console.log('Message from post response: '+msg)
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
  $('#subscriptionButton').on('click', function(event) {
    event.preventDefault()
    var $email = $('#email')
    var emailData = $email.val().trim() // string
    postEmail(emailData)
  });


})
