$("#personal-tab-submit").click(function() {
  var firstname = $("#firstname").val();
  var middlename = $("#middlename").val();
  var lastname = $("#lastname").val();
  var email = $("#email").val();
  var mobile = $("#mobile").val();
  var address_1 = $("#address_1").val();
  var address_2 = $("#address_2").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var zip = $("#state").val();
  var headline = $("#headline").val();
  var github = $("#github").val();
  var linkedin = $("#linkedin").val();
  var twitter = $("#twitter").val();
  var website = $("#website").val();
  var behance = $("#behance").val();
  var dribble = $("#dribble").val();
  var summary = $("#summary").val();

  $.ajax({
    url: "/personal",
    type: "post",
    data: {"firstname": firstname, "middlename": middlename, "lastname": lastname, "email": email,
           "mobile": mobile, "address_1": address_1, "address_2": address_2, "city": city, "state": state,
           "zip": zip, "github": github, "linkedin": linkedin, "twitter": twitter, "website": website,
           "behance": behance, "dribble": dribble, "summary": summary},
     dataType: "json",
     success: function(result) {
       Swal.fire({
         icon: result.icon,
         title: result.title,
         text: result.text
       });
     }
  });
});
