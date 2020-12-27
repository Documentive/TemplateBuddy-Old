// Select the add button
const addButton = document.querySelector('.addBtn');

// Select the container to store the experiences
const containExp = document.querySelector('.containExp');

// Fetch the data from the user
var jtitle = document.querySelector('.addTitle');
var cname = document.querySelector('.addCname');
var city = document.querySelector('.addCity');
var country = document.querySelector('.addCountry');
var sdate = document.querySelector('.addSdate');
var edate = document.querySelector('.addEdate');
var description = document.querySelector('.addDesc');

class item {
    constructor(jtitle, cname, city, country, sdate, edate, description) {
        this.createDiv(jtitle, cname, city, country, sdate, edate, description);
    }

    createDiv(jtitle, cname, city, country, sdate, edate, description) {

        // Create the elements
        let inputjtitle = document.createElement('input');
        let inputcname = document.createElement('input');
        let inputcity = document.createElement('input');
        let inputcountry = document.createElement('input');
        let inputsdate = document.createElement('input');
        let inputedate = document.createElement('input');
        let inputdescription = document.createElement('textarea');

        // Assign the values
        inputjtitle.value = jtitle;
        inputjtitle.classList.add('form-control');
        inputjtitle.classList.add('job_titles');
        inputjtitle.type = "text";

        inputcname.value = cname;
        inputcname.classList.add('form-control');
        inputcname.classList.add('companies');
        inputcname.type = "text";

        inputcity.value = city;
        inputcity.classList.add('form-control');
        inputcity.classList.add('cities_exp');
        inputcity.type = "text";

        inputcountry.value = country;
        inputcountry.classList.add('form-control');
        inputcountry.classList.add('countries_exp');
        inputcountry.type = "text";

        inputsdate.value = sdate;
        inputsdate.classList.add('form-control');
        inputsdate.classList.add('start_dates_exp');
        inputsdate.type = "date";

        inputedate.value = edate;
        inputedate.classList.add('form-control');
        inputedate.classList.add('end_dates_exp');
        inputedate.type = "date";

        inputdescription.value = description;
        inputdescription.classList.add('form-control');
        inputdescription.classList.add('description');

        // Create the html stucture according to the display
        let outerdiv = document.createElement('div');
        outerdiv.classList.add('outerDiv');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('form-group');

        let companyDiv = document.createElement('div');
        companyDiv.classList.add('form-group');

        let locationDiv = document.createElement('div');
        locationDiv.classList.add('form-row');

        let cityDiv = document.createElement('div');
        cityDiv.classList.add('form-group', 'col-md-6');

        let countryDiv = document.createElement('div');
        countryDiv.classList.add('form-group', 'col-md-6');

        let dateDiv = document.createElement('div');
        dateDiv.classList.add('form-row');

        let sdateDiv = document.createElement('div');
        sdateDiv.classList.add('form-group', 'col-md-6');

        let edateDiv = document.createElement('div');
        edateDiv.classList.add('form-group', 'col-md-6');

        let descpDiv = document.createElement('div');
        descpDiv.classList.add('form-group');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Add the elements in the respective position and hierarchy
        containExp.appendChild(outerdiv);
        outerdiv.appendChild(titleDiv);
        titleDiv.appendChild(inputjtitle);
        outerdiv.appendChild(companyDiv);
        companyDiv.appendChild(inputcname);
        outerdiv.appendChild(locationDiv);
        locationDiv.appendChild(cityDiv);
        cityDiv.appendChild(inputcity);
        locationDiv.appendChild(countryDiv);
        countryDiv.appendChild(inputcountry);
        outerdiv.appendChild(dateDiv);
        dateDiv.appendChild(sdateDiv);
        sdateDiv.appendChild(inputsdate);
        dateDiv.appendChild(edateDiv);
        edateDiv.appendChild(inputedate);
        outerdiv.appendChild(descpDiv);
        descpDiv.appendChild(inputdescription);
        outerdiv.appendChild(removeBtn);

        // To remove the experience
        removeBtn.addEventListener('click', () => this.remove(outerdiv));

    }

    // Remove function
    remove(item) {
        containExp.removeChild(item);
    }

}

// To convert an input to color
function change_color_on_empty(element) {
  if(element.value.length == 0)
    element.style.background = "#ffcccc";
  else
    element.style.background = "#ffffff";
}

// To check if the inputs field are empty or not.
function check() {
    if(jtitle.value != "" && cname.value != "" && city.value != "" && country.value != "" && sdate.value != "" && edate.value != "" && description.value != "") {
        new item (jtitle.value, cname.value, city.value, country.value, sdate.value, edate.value, description.value);
        jtitle.value = "";
        cname.value = "";
        city.value = "";
        country.value = "";
        sdate.value = "";
        edate.value = "";
        description.value = "";
    } else {
      change_color_on_empty(jtitle);
      change_color_on_empty(cname);
      change_color_on_empty(city);
      change_color_on_empty(country);
      change_color_on_empty(sdate);
      change_color_on_empty(edate);
      change_color_on_empty(description);
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

$("#experience-save").click(function() {
  var job_titles = get_inputs_by_classname("job_titles");
  var companies = get_inputs_by_classname("companies");
  var cities_exp = get_inputs_by_classname("cities_exp");
  var countries_exp = get_inputs_by_classname("countries_exp");
  var start_dates_exp = get_inputs_by_classname("start_dates_exp");
  var end_dates_exp = get_inputs_by_classname("end_dates_exp");
  var description = get_inputs_by_classname("description");

  var errorString = "";

  errorString = validate_entry(job_titles, "job title", errorString);
  errorString = validate_entry(companies, "companies", errorString);
  errorString = validate_entry(cities_exp, "city", errorString);
  errorString = validate_entry(countries_exp, "country", errorString);
  errorString = validate_entry(start_dates_exp, "start date", errorString);
  errorString = validate_entry(end_dates_exp, "end date", errorString);
  errorString = validate_entry(description, "description", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/experience",
      type: "post",
      data: {"job_titles": job_titles, "companies": companies, "cities_exp": cities_exp,
             "countries_exp": countries_exp, "start_dates_exp": start_dates_exp,
             "end_dates_exp": end_dates_exp, "description": description},
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
