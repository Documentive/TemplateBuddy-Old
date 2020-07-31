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

// setTimeout(function(){
//   $('#signupbtn1').click()
// },1000)

// setTimeout(function(){
//   $('#loginbtn1').click()
// },3000)