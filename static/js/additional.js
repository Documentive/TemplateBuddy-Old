// Add button for courses and certificates
const coursebtn = document.querySelector('.coursebtn');

// Add button for publications
const publishbtn = document.querySelector('.publishbtn');

// Add button for awards and honors
const awardbtn = document.querySelector('.awardbtn');

// Add button for hobbies and interests
const hobbybtn = document.querySelector('.hobbybtn');

// Container for courses and certificates
const containcourse = document.querySelector('.containcourse');

// Container for publications
const containpublish = document.querySelector('.containpublish');

// Container for awards and honors
const containaward = document.querySelector('.containaward');

// Container for hobbies
const containhobby = document.querySelector('.containhobby')

// Input variables of courses and certificates
var course = document.querySelector('#course');
var issuer = document.querySelector('#issuer');
var idate = document.querySelector('#idate');

// Input variables of publications
var ptitle = document.querySelector('#ptitle');
var publisher = document.querySelector('#publisher');
var pdate = document.querySelector('#pdate');

// Input variables of honors and awards
var htitle = document.querySelector('#htitle');
var hissuer = document.querySelector('#hissuer');
var hdate = document.querySelector('#hdate');

// Input variable of hobbies/interests
var hobbyname = document.querySelector('.addhobby');

// Class declaration for courses and certificates
class courses {
    constructor(course, issuer, idate) {
        this.createcourse(course, issuer, idate);
    }

    // Function to create the whole component
    createcourse(course, issuer, idate) {

        // Create the input elements
        let inputcourse = document.createElement('input');
        let inputissuer = document.createElement('input');
        let inputidate = document.createElement('input');

        // Assign the values to each element
        inputcourse.value = course;
        inputcourse.type = "text";
        inputcourse.classList.add('form-control');
        inputcourse.classList.add('course_names');

        inputissuer.value = issuer;
        inputissuer.type = "text";
        inputissuer.classList.add('form-control');
        inputissuer.classList.add('issuers');

        inputidate.value = idate;
        inputidate.type = "date";
        inputidate.classList.add('form-control');
        inputidate.classList.add('issues_on_dates');

        // Create the respective container divs for each element
        let outercourse = document.createElement('div');
        outercourse.classList.add('outercourse');

        let ptitlediv = document.createElement('div');
        ptitlediv.classList.add('form-group');

        let issuedetails = document.createElement('div');
        issuedetails.classList.add('form-row');

        let issuerdiv = document.createElement('div');
        issuerdiv.classList.add('form-group', 'col-md-6');

        let idatediv = document.createElement('div');
        idatediv.classList.add('form-group', 'col-md-6');

        // Create the remove button
        let removecourse = document.createElement('button');
        removecourse.innerHTML = "Remove";
        removecourse.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Place the elements in the required order
        containcourse.appendChild(outercourse);
        outercourse.appendChild(ptitlediv);
        ptitlediv.appendChild(inputcourse);
        outercourse.appendChild(issuedetails);
        issuedetails.appendChild(issuerdiv);
        issuerdiv.appendChild(inputissuer);
        issuedetails.appendChild(idatediv);
        idatediv.appendChild(inputidate);
        outercourse.appendChild(removecourse);

        // Add event listener to the remove button
        removecourse.addEventListener('click', () => this.remove(outercourse));

    }

    // Define the function triggered by remove button's eventlistener
    remove(courses) {
        containcourse.removeChild(courses);
    }

}

// Class declaration for publications
class publishes {
    constructor(ptitle, publisher, pdate) {
        this.createpublish(ptitle, publisher, pdate);
    }

    // Create the input elements
    createpublish(ptitle, publisher, pdate) {

        let inputptitle = document.createElement('input');
        let inputpublisher = document.createElement('input');
        let inputpdate = document.createElement('input');

        // Assign the values to each element
        inputptitle.value = ptitle;
        inputptitle.type = "text";
        inputptitle.classList.add('form-control');
        inputptitle.classList.add('paper_titles');

        inputpublisher.value = publisher;
        inputpublisher.type = "text";
        inputpublisher.classList.add('form-control');
        inputpublisher.classList.add('publications');

        inputpdate.value = pdate;
        inputpdate.type = "date";
        inputpdate.classList.add('form-control');
        inputpdate.classList.add('published_on_dates');

        // Create the respective container divs for each element
        let outerpublish = document.createElement('div');
        outerpublish.classList.add('outerpublish');

        let ptitlediv = document.createElement('div');
        ptitlediv.classList.add('form-group');

        let publicationdetails = document.createElement('div');
        publicationdetails.classList.add('form-row');

        let publisherdiv = document.createElement('div');
        publisherdiv.classList.add('form-group', 'col-md-6');

        let pdatediv = document.createElement('div');
        pdatediv.classList.add('form-group', 'col-md-6');

        // Create the remove button
        let removepublish = document.createElement('button');
        removepublish.innerHTML = "Remove";
        removepublish.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Place the elements in the required order
        containpublish.appendChild(outerpublish);
        outerpublish.appendChild(ptitlediv);
        ptitlediv.appendChild(inputptitle);
        outerpublish.appendChild(publicationdetails);
        publicationdetails.appendChild(publisherdiv);
        publisherdiv.appendChild(inputpublisher);
        publicationdetails.appendChild(pdatediv);
        pdatediv.appendChild(inputpdate);
        outerpublish.appendChild(removepublish);

        // Add event listener to the remove button
        removepublish.addEventListener('click', () => this.remove(outerpublish));

    }

    // Define the function triggered by remove button's eventlistener
    remove(publishes) {
        containpublish.removeChild(publishes);
    }

}

// Class declaration for awards and honors
class awards {
    constructor(htitle, hissuer, hdate) {
        this.createcourse(htitle, hissuer, hdate);
    }

    // Function to create the whole component
    createcourse(htitle, hissuer, hdate) {

        // Create the input elements
        let inputhtitle = document.createElement('input');
        let inputhissuer = document.createElement('input');
        let inputhdate = document.createElement('input');

        // Assign the values to each element
        inputhtitle.value = htitle;
        inputhtitle.type = "text";
        inputhtitle.classList.add('form-control');
        inputhtitle.classList.add('honor_titles');

        inputhissuer.value = hissuer;
        inputhissuer.type = "text";
        inputhissuer.classList.add('form-control');
        inputhissuer.classList.add('honor_issuers');

        inputhdate.value = hdate;
        inputhdate.type = "date";
        inputhdate.classList.add('form-control');
        inputhdate.classList.add('honor_issued_dates');

        // Create the respective container divs for each element
        let outeraward = document.createElement('div');
        outeraward.classList.add('outeraward');

        let htitlediv = document.createElement('div');
        htitlediv.classList.add('form-group');

        let hissuedetails = document.createElement('div');
        hissuedetails.classList.add('form-row');

        let hissuerdiv = document.createElement('div');
        hissuerdiv.classList.add('form-group', 'col-md-6');

        let hdatediv = document.createElement('div');
        hdatediv.classList.add('form-group', 'col-md-6');

        // Create the remove button
        let removeaward = document.createElement('button');
        removeaward.innerHTML = "Remove";
        removeaward.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Place the elements in the required order
        containaward.appendChild(outeraward);
        outeraward.appendChild(htitlediv);
        htitlediv.appendChild(inputhtitle);
        outeraward.appendChild(hissuedetails);
        hissuedetails.appendChild(hissuerdiv);
        hissuerdiv.appendChild(inputhissuer);
        hissuedetails.appendChild(hdatediv);
        hdatediv.appendChild(inputhdate);
        outeraward.appendChild(removeaward);

        // Add event listener to the remove button
        removeaward.addEventListener('click', () => this.remove(outeraward));

    }

    // Define the function triggered by remove button's eventlistener
    remove(awards) {
        containaward.removeChild(awards);
    }

}

// Class declaration for hobbies and interests
class hobbies {
    constructor(hobby) {
        this.createhobby(hobby);
    }

    // Function to create the whole component
    createhobby(hobby) {

        // Create the input elements
        let inputhobby = document.createElement('input');

        // Assign the values to each element
        inputhobby.value = hobby;
        inputhobby.style.background = "#ffffff";
        inputhobby.classList.add('form-control');
        inputhobby.classList.add('hobbies');
        inputhobby.type = "text";

        // Create the respective container divs for each element
        let itemBox1 = document.createElement('div');
        itemBox1.classList.add('form-group');

        let itemBox2 = document.createElement('div');
        itemBox2.classList.add('input-group', 'mb3');

        let itemBox3 = document.createElement('div');
        itemBox3.classList.add('input-group-append');

        // Create the remove button
        let removehobby = document.createElement('button');
        removehobby.innerHTML = "Remove";
        removehobby.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Place the elements in the required order
        containhobby.appendChild(itemBox1);
        itemBox1.appendChild(itemBox2);
        itemBox2.appendChild(inputhobby);
        itemBox2.appendChild(itemBox3);
        itemBox3.appendChild(removehobby);

        // Add event listener to the remove button
        removehobby.addEventListener('click', () => this.remove(itemBox1));

    }
    // Define the function triggered by remove button's eventlistener
    remove(hobby) {
        containHobby.removeChild(hobby);
    }

}

// To convert an input to color
function change_color_on_empty(element) {
  if(element.value.length == 0)
    element.style.background = "#ffcccc";
  else
    element.style.background = "#ffffff";
}

// Check function for courses and awards
function checkcourse() {
    if(course.value != "" && issuer.value != "" && idate.value != "") {
        new courses (course.value, issuer.value, idate.value);
            course.value = "";
            issuer.value = "";
            idate.value = "";
    } else {
      change_color_on_empty(course);
      change_color_on_empty(issuer);
      change_color_on_empty(idate);
    }
}

// Check function for publications
function checkpublish() {
    if(ptitle.value != "" && publisher.value != "" && pdate.value != "") {
        new publishes (ptitle.value, publisher.value, pdate.value);
            ptitle.value = "";
            publisher.value = "";
            pdate.value = "";
    } else {
      change_color_on_empty(ptitle);
      change_color_on_empty(publisher);
      change_color_on_empty(pdate);
    }
}

// Check function for awards and honors
function checkaward() {
    if(htitle.value != "" && hissuer.value != "" && hdate.value != "") {
        new awards (htitle.value, hissuer.value, hdate.value);
            htitle.value = "";
            hissuer.value = "";
            hdate.value = "";
    } else {
      change_color_on_empty(htitle);
      change_color_on_empty(hissuer);
      change_color_on_empty(hdate);
    }
}

// Check function for hobbies and interests
function checkhobby() {
    if(hobbyname.value != ""){
        new hobbies(hobbyname.value);
        hobbyname.value = "";
    } else {
      change_color_on_empty(hobbyname);
    }
}

// Add button click event for courses and certificates
coursebtn.addEventListener('click', checkcourse);

// Add button click event for publications
publishbtn.addEventListener('click', checkpublish);

// Add button click event for awards and honors
awardbtn.addEventListener('click', checkaward);

// Add button click event for hobbies and interests
hobbybtn.addEventListener('click', checkhobby);

function get_inputs_by_classname(classname) {
  var value = "";
  $('.' + classname).each(function() {
    value += $(this).val() + "~~~";
  });

  return value;
}

function get_inputs_by_classname(classname) {
  var value = "";
  var isEmpty = false;
  $('.' + classname).each(function(idx) {
    if($(this).val().length == 0) {
      value = idx;
      isEmpty = true;
    }
    
    if(!isEmpty)
      value += $(this).val() + "~~~";
  });

  return value;
}

function validate_entry(field, fieldName,  errorString) {
  if(typeof(field) == "number") {
    errorString += "Empty " + fieldName + " at entry " + (field + 1) + "<br>";
  }

  return errorString;
}

$("#course-save").click(function() {
  var course_names = get_inputs_by_classname("course_names");
  var issuers = get_inputs_by_classname("issuers");
  var issues_on_dates = get_inputs_by_classname("issues_on_dates");

  var errorString = "";

  errorString = validate_entry(course_names, "course name", errorString);
  errorString = validate_entry(issuers, "issuer", errorString);
  errorString = validate_entry(issues_on_dates, "issued on", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/courses",
      type: "post",
      data: {"course_names": course_names, "issuers": issuers, "issues_on_dates": issues_on_dates},
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        });
      }
    });
  }
});

$("#publication-save").click(function() {
  var paper_titles = get_inputs_by_classname("paper_titles");
  var publications = get_inputs_by_classname("publications");
  var published_on_dates = get_inputs_by_classname("published_on_dates");

  var errorString = "";

  errorString = validate_entry(paper_titles, "paper title", errorString);
  errorString = validate_entry(publications, "publication", errorString);
  errorString = validate_entry(published_on_dates, "published on", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/publications",
      type: "post",
      data: {"paper_titles": paper_titles, "publications": publications, "published_on_dates": published_on_dates},
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        });
      }
    });
  }
});

$("#honor-save").click(function() {
  var honor_titles = get_inputs_by_classname("honor_titles");
  var honor_issuers = get_inputs_by_classname("honor_issuers");
  var honor_issued_dates = get_inputs_by_classname("honor_issued_dates");

  var errorString = "";

  errorString = validate_entry(honor_titles, "honor title", errorString);
  errorString = validate_entry(honor_issuers, "honor issuer", errorString);
  errorString = validate_entry(honor_issued_dates, "honor issued on", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/honors",
      type: "post",
      data: {"honor_titles": honor_titles, "honor_issuers": honor_issuers, "honor_issued_dates": honor_issued_dates},
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        });
      }
    });
  }
});

$("#hobby-save").click(function() {
  var hobbies = get_inputs_by_classname("hobbies");

  var errorString = "";

  errorString = validate_entry(hobbies, "hobby", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/hobby",
      type: "post",
      data: {"hobbies": hobbies},
      success: function(result) {
        Swal.fire({
          icon: result.icon,
          title: result.title,
          text: result.text
        });
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
