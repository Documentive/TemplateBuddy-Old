// Select the add button
const addButton = document.querySelector('.addBtn');

// Select the container to store the projects
const containProject = document.querySelector('.containProject')

// Fetch the data from the user
var addtitle = document.querySelector('.addTitle');
var adddescp = document.querySelector('.adddescp');
var addsdate = document.querySelector('.addsdate');
var addedate = document.querySelector('.addedate');

class item {
    constructor(title, description, sdate, edate) {
        this.createDiv(title, description, sdate, edate);
    }

    createDiv(title, description, sdate, edate) {

        let inputTitle = document.createElement('input');
        let inputSDate = document.createElement('input');
        let inputEDate = document.createElement('input');
        let inputDescription = document.createElement('textarea');

        inputTitle.value = title;
        inputTitle.classList.add('form-control');
        inputTitle.classList.add('project_title');
        inputTitle.type = "text";

        inputSDate.value = sdate;
        inputSDate.classList.add('form-control');
        inputSDate.classList.add('start_dates_proj');
        inputSDate.type = "date";

        inputEDate.value = edate;
        inputEDate.classList.add('form-control');
        inputEDate.classList.add('end_dates_proj');
        inputEDate.type = "date";

        inputDescription.value = description;
        inputDescription.classList.add('form-control');
        inputDescription.classList.add('description_proj');

        // Create the html stucture according to the display
        let outerdiv = document.createElement('div');
        outerdiv.classList.add('outerDiv');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('form-group');

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('form-group');

        let dateDiv = document.createElement('div');
        dateDiv.classList.add('form-row');

        let sdateDiv = document.createElement('div');
        sdateDiv.classList.add('form-group', 'col-md-6');

        let edateDiv = document.createElement('div');
        edateDiv.classList.add('form-group', 'col-md-6');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Add the elements in the respective position and hierarchy
        containProject.appendChild(outerdiv);
        outerdiv.appendChild(titleDiv);
        titleDiv.appendChild(inputTitle);
        outerdiv.appendChild(descriptionDiv);
        descriptionDiv.appendChild(inputDescription);
        outerdiv.appendChild(dateDiv);
        dateDiv.appendChild(sdateDiv);
        sdateDiv.appendChild(inputSDate);
        dateDiv.appendChild(edateDiv);
        edateDiv.appendChild(inputEDate);
        outerdiv.appendChild(removeBtn);

        // To remove the project data
        removeBtn.addEventListener('click', () => this.remove(outerdiv));

    }

    // Remove function
    remove(item) {
        containProject.removeChild(item);
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
    if(addtitle.value != "" && adddescp.value != "" && addsdate.value != "" && addedate != "") {
        new item (addtitle.value, adddescp.value, addsdate.value, addedate.value);
        addtitle.value = "";
        adddescp.value = "";
        addsdate.value = "";
        addedate.value = "";
    } else {
      change_color_on_empty(addtitle);
      change_color_on_empty(adddescp);
      change_color_on_empty(addsdate);
      change_color_on_empty(addedate);
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

$("#project-save").click(function() {
  var project_title = get_inputs_by_classname("project_title");
  var description_proj = get_inputs_by_classname("description_proj");
  var start_dates_proj = get_inputs_by_classname("start_dates_proj");
  var end_dates_proj = get_inputs_by_classname("end_dates_proj");

  var errorString = "";

  errorString = validate_entry(project_title, "project title", errorString);
  errorString = validate_entry(description_proj, "project description", errorString);
  errorString = validate_entry(start_dates_proj, "start date of project", errorString);
  errorString = validate_entry(end_dates_proj, "end date of project", errorString);

  if(errorString) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: errorString
    });
  } else {
    $.ajax({
      url: "/projects",
      type: "post",
      data: {"project_title": project_title, "description_proj": description_proj,
            "start_dates_proj": start_dates_proj, "end_dates_proj": end_dates_proj},
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
