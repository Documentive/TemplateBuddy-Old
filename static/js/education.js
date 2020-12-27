// Select the add button
const addButton = document.querySelector('.addBtn');

// Select the container to store the educations
const containEducation = document.querySelector('.containEducation');

// Fetch the data from the user
var iname = document.querySelector('#institute');
var city = document.querySelector('#city');
var country = document.querySelector('#country');
var degree = document.querySelector('#degree');
var fos = document.querySelector('#fos');
var sdate = document.querySelector('#sdate');
var edate = document.querySelector('#edate');
var selectType = document.querySelector('#selectType');
var gradeval = document.querySelector('#gradeval');

class item {
    constructor(iname, city, country, degree, fos, sdate, edate, selectType, gradeval) {
        this.createDiv(iname, city, country, degree, fos, sdate, edate, selectType, gradeval);
    }

    createDiv(iname, city, country, degree, fos, sdate, edate, selectType, gradeval) {

        // Create the elements
        let inputiname = document.createElement('input');
        let inputcity = document.createElement('input');
        let inputcountry = document.createElement('input');
        let inputdegree = document.createElement('input');
        let inputfos = document.createElement('input');
        let inputsdate = document.createElement('input');
        let inputedate = document.createElement('input');
        let inputselectType = document.createElement('input');
        let inputgradeval = document.createElement('input');

        // Assign the values
        inputiname.value = iname;
        inputiname.classList.add('form-control');
        inputiname.classList.add('institute_names');
        inputiname.type = "text";

        inputcity.value = city;
        inputcity.classList.add('form-control');
        inputcity.classList.add('cities');
        inputcity.type = "text";

        inputcountry.value = country;
        inputcountry.classList.add('form-control');
        inputcountry.classList.add('countries');
        inputcountry.type = "text";

        inputdegree.value = degree;
        inputdegree.classList.add('form-control');
        inputdegree.classList.add('degrees');
        inputdegree.type = "text";

        inputfos.value = fos;
        inputfos.classList.add('form-control');
        inputfos.classList.add('fields_of_study');
        inputfos.type = "text";

        inputsdate.value = sdate;
        inputsdate.classList.add('form-control');
        inputsdate.classList.add('start_dates');
        inputsdate.type = "date";

        inputedate.value = edate;
        inputedate.classList.add('form-control');
        inputedate.classList.add('end_dates');
        inputedate.type = "date";

        inputselectType.value = selectType;
        inputselectType.classList.add('form-control');
        inputselectType.classList.add('grade_types');
        inputselectType.type = "text";

        inputgradeval.value = gradeval;
        inputgradeval.classList.add('form-control');
        inputgradeval.classList.add('grades');
        inputgradeval.type = "text";

        // Create the html stucture according to the display
        let outerdiv = document.createElement('div');
        outerdiv.classList.add('outerDiv');

        let inamediv = document.createElement('div');
        inamediv.classList.add('form-group');

        let locationdiv = document.createElement('div');
        locationdiv.classList.add('form-row');

        let citydiv = document.createElement('div');
        citydiv.classList.add('form-group', 'col-md-6');

        let countrydiv = document.createElement('div');
        countrydiv.classList.add('form-group', 'col-md-6');

        let degreediv = document.createElement('div');
        degreediv.classList.add('form-row');

        let degreeinfo = document.createElement('div');
        degreeinfo.classList.add('form-group', 'col-md-6');

        let fosdiv = document.createElement('div');
        fosdiv.classList.add('form-group', 'col-md-6');

        let datediv = document.createElement('div');
        datediv.classList.add('form-row');

        let sdatediv = document.createElement('div');
        sdatediv.classList.add('form-group', 'col-md-6');

        let edatediv = document.createElement('div');
        edatediv.classList.add('form-group', 'col-md-6');

        let gradediv = document.createElement('div');
        gradediv.classList.add('form-row');

        let gradetype = document.createElement('div');
        gradetype.classList.add('form-group', 'col-md-6');

        let gradevalue = document.createElement('div');
        gradevalue.classList.add('form-group', 'col-md-6');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Add the elements in the respective position and hierarchy
        containEducation.appendChild(outerdiv);
        outerdiv.appendChild(inamediv);
        inamediv.appendChild(inputiname);
        outerdiv.appendChild(locationdiv);
        locationdiv.appendChild(citydiv);
        citydiv.appendChild(inputcity);
        locationdiv.appendChild(countrydiv);
        countrydiv.appendChild(inputcountry);
        outerdiv.appendChild(degreediv);
        degreediv.appendChild(degreeinfo);
        degreeinfo.appendChild(inputdegree);
        degreediv.appendChild(fosdiv);
        fosdiv.appendChild(inputfos);
        outerdiv.appendChild(datediv);
        datediv.appendChild(sdatediv);
        sdatediv.appendChild(inputsdate);
        datediv.appendChild(edatediv);
        edatediv.appendChild(inputedate);
        outerdiv.appendChild(gradediv);
        gradediv.appendChild(gradetype);
        gradetype.appendChild(inputselectType);
        gradediv.appendChild(gradevalue);
        gradevalue.appendChild(inputgradeval);
        outerdiv.appendChild(removeBtn);

        // To remove the experience
        removeBtn.addEventListener('click', () => this.remove(outerdiv));

    }

    // Remove function
    remove(item) {
        containEducation.removeChild(item);
    }

}

// To convert an input to color
function change_color_on_empty(element) {
  if(element.value.length == 0)
    element.style.background = "#ffcccc";
  else
    element.style.background = "#ffffff";
}

// To check if the input fields are empty or not.
function check() {
    if(iname.value != ""  && city.value != "" && country.value != ""  && degree.value != "" && fos.value != "" && sdate.value != "" && edate.value != "" && selectType.value != "" && gradeval.value != "") {
        new item (iname.value, city.value, country.value, degree.value, fos.value, sdate.value, edate.value, selectType.value, gradeval.value);
        iname.value = "";
        city.value = "";
        country.value = "";
        degree.value = "";
        fos.value = "";
        sdate.value = "";
        edate.value = "";
        selectType.value = "";
        gradeval.value = "";
    } else {
      change_color_on_empty(iname);
      change_color_on_empty(city);
      change_color_on_empty(country);
      change_color_on_empty(degree);
      change_color_on_empty(fos);
      change_color_on_empty(sdate);
      change_color_on_empty(edate);
      change_color_on_empty(selectType);
      change_color_on_empty(gradeval);
    }
}

// Add button to add the project information
addButton.addEventListener('click', check);

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

$("#education-save").click(function() {
  var institute_names = get_inputs_by_classname("institute_names");
  var cities = get_inputs_by_classname("cities");
  var countries = get_inputs_by_classname("countries");
  var degrees = get_inputs_by_classname("degrees");
  var fields_of_study = get_inputs_by_classname("fields_of_study");
  var start_dates = get_inputs_by_classname("start_dates");
  var end_dates = get_inputs_by_classname("end_dates");
  var grade_types = get_inputs_by_classname("grade_types");
  var grades = get_inputs_by_classname("grades");

  var errorString = "";

  errorString = validate_entry(institute_names, "institute name", errorString);
  errorString = validate_entry(cities, "city", errorString);
  errorString = validate_entry(countries, "country", errorString);
  errorString = validate_entry(degrees, "degree", errorString);
  errorString = validate_entry(fields_of_study, "field of study", errorString);
  errorString = validate_entry(start_dates, "start date", errorString);
  errorString = validate_entry(end_dates, "end date", errorString);
  errorString = validate_entry(grades, "grade", errorString);
  
  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/education",
      type: "post",
      data: {"institute_names": institute_names, "cities": cities, "countries": countries, "degrees": degrees,
            "fields_of_study": fields_of_study, "start_dates": start_dates, "end_dates": end_dates, "grade_types": grade_types,
            "grades": grades},
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
