const addButton = document.querySelector('.addBtn');

const containExp = document.querySelector('.containExp');

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

        let inputjtitle = document.createElement('input');
        let inputcname = document.createElement('input');
        let inputcity = document.createElement('input');
        let inputcountry = document.createElement('input');
        let inputsdate = document.createElement('input');
        let inputedate = document.createElement('input');
        let inputdescription = document.createElement('textarea');

        inputjtitle.value = jtitle;
        inputjtitle.disabled = true;
        inputjtitle.classList.add('form-control');
        inputjtitle.type = "text";

        inputcname.value = cname;
        inputcname.disabled = true;
        inputcname.classList.add('form-control');
        inputcname.type = "text";

        inputcity.value = city;
        inputcity.disabled = true;
        inputcity.classList.add('form-control');
        inputcity.type = "text";

        inputcountry.value = country;
        inputcountry.disabled = true;
        inputcountry.classList.add('form-control');
        inputcountry.type = "text";

        inputsdate.value = sdate;
        inputsdate.disabled = true;
        inputsdate.classList.add('form-control');
        inputsdate.type = "date";

        inputedate.value = edate;
        inputedate.disabled = true;
        inputedate.classList.add('form-control');
        inputedate.type = "date";

        inputdescription.value = description;
        inputdescription.disabled = true;
        inputdescription.classList.add('form-control');

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

        removeBtn.addEventListener('click', () => this.remove(outerdiv));

    }

    remove(item) {
        containExp.removeChild(item);
    }

}

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
    }
}

addButton.addEventListener('click', check);