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
        inputiname.disabled = true;
        inputiname.classList.add('form-control');
        inputiname.type = "text";

        inputcity.value = city;
        inputcity.disabled = true;
        inputcity.classList.add('form-control');
        inputcity.type = "text";

        inputcountry.value = country;
        inputcountry.disabled = true;
        inputcountry.classList.add('form-control');
        inputcountry.type = "text";

        inputdegree.value = degree;
        inputdegree.disabled = true;
        inputdegree.classList.add('form-control');
        inputdegree.type = "text";

        inputfos.value = fos;
        inputfos.disabled = true;
        inputfos.classList.add('form-control');
        inputfos.type = "text";

        inputsdate.value = sdate;
        inputsdate.disabled = true;
        inputsdate.classList.add('form-control');
        inputsdate.type = "date";

        inputedate.value = edate;
        inputedate.disabled = true;
        inputedate.classList.add('form-control');
        inputedate.type = "date";

        inputselectType.value = selectType;
        inputselectType.disabled = true;
        inputselectType.classList.add('form-control');
        inputselectType.type = "text";

        inputgradeval.value = gradeval;
        inputgradeval.disabled = true;
        inputgradeval.classList.add('form-control');
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
    }
}

// Add button to add the project information
addButton.addEventListener('click', check);