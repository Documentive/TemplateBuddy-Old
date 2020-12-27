function get_inputs_by_classname(idname) {
  var value = "";
  
  if($("#" + idname).val().length == 0)
    value = 1;
  else
    value = $(idname).val();

  return value;
}

function validate_entry(field, fieldName,  errorString) {
  if(typeof(field) == "number") {
    errorString += "Empty " + fieldName + "<br>";
  }

  return errorString;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$("#personal-tab-submit").click(function() {
  var firstname = get_inputs_by_classname("firstname");
  var middlename = get_inputs_by_classname("middlename");
  var lastname = get_inputs_by_classname("lastname");
  var email = get_inputs_by_classname("email");
  var mobile = get_inputs_by_classname("mobile");
  var address_1 = get_inputs_by_classname("address_1");
  var address_2 = get_inputs_by_classname("address_2");
  var city = get_inputs_by_classname("city");
  var state = get_inputs_by_classname("state");
  var zip = get_inputs_by_classname("zip");
  var headline = get_inputs_by_classname("headline");
  var github = get_inputs_by_classname("github");
  var linkedin = get_inputs_by_classname("linkedin");
  var twitter = get_inputs_by_classname("twitter");
  var website = get_inputs_by_classname("website");
  var behance = get_inputs_by_classname("behance");
  var dribble = get_inputs_by_classname("dribble");
  var summary = get_inputs_by_classname("summary");
  var profile_picture = get_inputs_by_classname("profile_picture");

  var errorString = "";

  errorString = validate_entry(firstname, "first name", errorString);
  errorString = validate_entry(middlename, "middle name", errorString);
  errorString = validate_entry(lastname, "last name", errorString);
  errorString = validate_entry(email, "email", errorString);
  errorString = validate_entry(mobile, "mobile", errorString);
  errorString = validate_entry(address_1, "address line 1", errorString);
  errorString = validate_entry(address_2, "address line 2", errorString);
  errorString = validate_entry(city, "city", errorString);
  errorString = validate_entry(state, "state", errorString);
  errorString = validate_entry(zip, "zip", errorString);
  errorString = validate_entry(headline, "headline", errorString);
  errorString = validate_entry(github, "github", errorString);
  errorString = validate_entry(linkedin, "linkedin", errorString);
  errorString = validate_entry(twitter, "twitter", errorString);
  errorString = validate_entry(website, "website", errorString);
  errorString = validate_entry(behance, "behance", errorString);
  errorString = validate_entry(dribble, "dribble", errorString);
  errorString = validate_entry(summary, "summary", errorString);
  errorString = validate_entry(profile_picture, "profile picture", errorString);

  if(!validateEmail(email)) {
    errorString += "Invalid email address<br>";
  }

  if(mobile.length != 10) {
    errorString += "Invalid mobile number, should be 10 digits long<br>";
  }

  if(zip.length != 6) {
    errorString += "Invalid zip code, should be 6 digits long<br>";
  }

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
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
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      data: all_data,
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
  }
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

function open_image(file_path) {
  window.open(file_path);
}
