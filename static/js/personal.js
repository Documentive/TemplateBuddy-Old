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
  var zip = $("#zip").val();
  var headline = $("#headline").val();
  var github = $("#github").val();
  var linkedin = $("#linkedin").val();
  var twitter = $("#twitter").val();
  var website = $("#website").val();
  var behance = $("#behance").val();
  var dribble = $("#dribble").val();
  var summary = $("#summary").val();

  var all_data = new FormData();
  all_data.append('firstname', firstname);
  all_data.append('middlename', middlename);
  all_data.append('lastname', lastname);
  all_data.append('email', email);
  all_data.append('mobile', mobile);
  all_data.append('address_1', address_1);
  all_data.append('address_2', address_2);
  all_data.append('city', city);
  all_data.append('state', state);
  all_data.append('zip', zip);
  all_data.append('headline', headline);
  all_data.append('github', github);
  all_data.append('linkedin', linkedin);
  all_data.append('twitter', twitter);
  all_data.append('website', website);
  all_data.append('behance', behance);
  all_data.append('dribble', dribble);
  all_data.append('summary', summary);
  all_data.append('profile_picture', $("#profile_picture")[0].files[0]);

  $.ajax({
     url: "/personal",
     type: "post",
     data: all_data,
     processData: false,
     success: function(result) {
       Swal.fire({
         icon: result.icon,
         title: result.title,
         text: result.text
       });
     },
     error: function(j, e) {
       console.log(j.responseText);
       console.log(e);
     }
  });
});

$("#logout").click(function() {
  $.ajax({
    url: "/logout",
    type: "get",
    success: function(result) {
      Swal.fire({
        icon: result.icon,
        title: result.title,
        text: result.text
      }).then(function() {
        if(result.icon == 'success')
          location.href = '/';
      });
    }
  });
});
