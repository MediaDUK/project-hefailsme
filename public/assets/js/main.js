$(document).ready(function () {

  // popup window on homepage
  function startPopup() {
    console.log('pop started')
    var time = 5000
    setTimeout(function () {
      var $EmailModal = $('#emailSubscription')
      $EmailModal.modal('show')
    }, time);
  }
  startPopup()

  // posting the data to JAW_DB on heroku
  function postEmail(email_to_post) {
    console.log('Posting to database: ' + email_to_post)
    $.ajax({
        method: 'POST',
        url: '/email-subscription',
        data: {
          'email': email_to_post
        }
      })
      .done(function (res) {
        console.log('SUCCESS =================', res);
        if (res == 'OK') {
          var $email = $('#email')
          $email.val('')
          var $EmailModal = $('#emailSubscription')
          setTimeout(function () {
            // close modal after success from jawsbd post          
            $EmailModal.modal('hide')
          }, 1000)

        }
      })
      .fail(function (err) {
        console.log('ERROR ======================', err)
      })
  }


  // click event for email form / button
  var submitBtn_popup = $('#subscriptionButton')
  submitBtn_popup.on('click', function (event) {
    event.preventDefault()
    var $email = $('#email')
    var emailData = $email.val().trim() // string
    postEmail(emailData)
  });

  function showError(target_class) {
    console.log('Show error')
    $(target_class).removeClass('hidden')
  }

  function hideError(target_class) {
    console.log('hiding error')
    $(target_class).addClass('hidden')
  }
});