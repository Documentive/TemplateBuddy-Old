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
        inputTitle.disabled = true;
        inputTitle.classList.add('form-control');
        inputTitle.type = "text";

        inputSDate.value = sdate;
        inputSDate.disabled = true;
        inputSDate.classList.add('form-control');
        inputSDate.type = "date";

        inputEDate.value = edate;
        inputEDate.disabled = true;
        inputEDate.classList.add('form-control');
        inputEDate.type = "date";

        inputDescription.value = description;
        inputDescription.disabled = true;
        inputDescription.classList.add('form-control');
        // inputDescription.type = "text";

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
