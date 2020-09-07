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
});

$('#loginbtn1').on('click', function() {
  $loginMsg.toggleClass("visible");
  $frontbox.removeClass("move");
  $signupMsg.toggleClass("visible");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
  } else if(!validateEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Invalid email address!"
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
  } else if(!validateEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Invalid email address!"
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
        }).then(function() {
          if(result.icon == 'success')
            location.href = '/personal';
        });
      }
    })
  }
});
