var $loginMsg = $('.loginmsg'),
  $login = $('.login'),
  $signupMsg = $('.signupmsg'),
  $signup = $('.signup'),
  $frontbox = $('.front');

$('#signupbtn1').on('click', function() {
  $loginMsg.toggleClass("visible");
  $frontbox.addClass("move");
  $signupMsg.toggleClass("visible");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

$('#loginbtn1').on('click', function() {
  $loginMsg.toggleClass("visible");
  $frontbox.removeClass("move");
  $signupMsg.toggleClass("visible");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

$("#signup-button").click(function() {
  var fullname = $("#fullname").val();
  var email = $("#email").val();
  var password = $("#password").val();

  if(!fullname || !email || !password) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "All fields are required!"
    });
  } else {
    $.ajax({
      url: "/signup",
      type: "post",
      data: {"fullname": fullname, "email": email, "password": password},
      dataType: "json",
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        }).then(function() {
          if(result.icon == 'success')
            window.location.reload();
        });
      }
    });
  }
});

$("#login-button").click(function() {
  var email = $("#email-login").val();
  var password = $("#password-login").val();

  if(!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "All fields are required!"
    });
  } else {
    $.ajax({
      url: "/login",
      type: "post",
      data: {"email": email, "password": password},
      dataType: "json",
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        });
      }
    })
  }
});
