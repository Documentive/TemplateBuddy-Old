// // Select the add button
// const addButton = document.querySelector('.addBtn');

// // Select the input value
// var takeInput = document.querySelector('.addText');

// // Select the container to store the interests/hobbies
// const containHobby = document.querySelector('.containHobby');

class item {
    constructor(itemName) {
        // Create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('form-control');
        input.type = "text";

        // Create the divs according to the bootstrap forms
        let itemBox1 = document.createElement('div');
        itemBox1.classList.add('form-group');

        let itemBox2 = document.createElement('div');
        itemBox2.classList.add('input-group', 'mb3');

        let itemBox3 = document.createElement('div');
        itemBox3.classList.add('input-group-append');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        // Add the respective elements in proper order and hierarchy
        containHobby.appendChild(itemBox1);
        itemBox1.appendChild(itemBox2);
        itemBox2.appendChild(input);
        itemBox2.appendChild(itemBox3);
        itemBox3.appendChild(removeBtn);

        // To remove the skill
        removeBtn.addEventListener('click', () => this.remove(itemBox1));

    }

    // Remove function
    remove(item) {
        containHobby.removeChild(item);
    }
}

// // To check if the input field is empty or not.
// function check() {
//     if(takeInput.value != ""){
//         new item(takeInput.value);
//         takeInput.value = "";
//     }
// }

// // Add button to add the hobby/interest
// addButton.addEventListener('click', check);

const coursebtn = document.querySelector('.coursebtn');
const publishbtn = document.querySelector('.publishbtn');
const awardbtn = document.querySelector('.awardbtn');
const hobbybtn = document.querySelector('.hobbybtn');

const containcourse = document.querySelector('.containcourse');
const containpublish = document.querySelector('.containpublish');
const containaward = document.querySelector('.containaward');
const containhobby = document.querySelector('.containhobby')

var course = document.querySelector('#course');
var issuer = document.querySelector('#issuer');
var idate = document.querySelector('#idate');
var ptitle = document.querySelector('#ptitle');
var publisher = document.querySelector('#publisher');
var pdate = document.querySelector('#pdate');
var htitle = document.querySelector('#htitle');
var hissuer = document.querySelector('#hissuer');
var hdate = document.querySelector('#hdate');
var hobbyname = document.querySelector('.addhobby');

class courses {
    constructor(course, issuer, idate) {
        this.createcourse(course, issuer, idate);
    }

    createcourse(course, issuer, idate) {

        let inputcourse = document.createElement('input');
        let inputissuer = document.createElement('input');
        let inputidate = document.createElement('input');

        inputcourse.value = course;
        inputcourse.type = "text";
        inputcourse.disabled = true;
        inputcourse.classList.add('form-control');

        inputissuer.value = issuer;
        inputissuer.type = "text";
        inputissuer.disabled = true;
        inputissuer.classList.add('form-control');

        inputidate.value = idate;
        inputidate.type = "date";
        inputidate.disabled = true;
        inputidate.classList.add('form-control');

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

        let removecourse = document.createElement('button');
        removecourse.innerHTML = "Remove";
        removecourse.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        containcourse.appendChild(outercourse);
        outercourse.appendChild(ptitlediv);
        ptitlediv.appendChild(inputcourse);
        outercourse.appendChild(issuedetails);
        issuedetails.appendChild(issuerdiv);
        issuerdiv.appendChild(inputissuer);
        issuedetails.appendChild(idatediv);
        idatediv.appendChild(inputidate);
        outercourse.appendChild(removecourse);

        removecourse.addEventListener('click', () => this.remove(outercourse));

    }

    remove(courses) {
        containcourse.removeChild(courses);
    }

}


class publishes {
    constructor(ptitle, publisher, pdate) {
        this.createpublish(ptitle, publisher, pdate);
    }

    createpublish(ptitle, publisher, pdate) {

        let inputptitle = document.createElement('input');
        let inputpublisher = document.createElement('input');
        let inputpdate = document.createElement('input');

        inputptitle.value = ptitle;
        inputptitle.type = "text";
        inputptitle.disabled = true;
        inputptitle.classList.add('form-control');

        inputpublisher.value = publisher;
        inputpublisher.type = "text";
        inputpublisher.disabled = true;
        inputpublisher.classList.add('form-control');

        inputpdate.value = pdate;
        inputpdate.type = "date";
        inputpdate.disabled = true;
        inputpdate.classList.add('form-control');

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

        let removepublish = document.createElement('button');
        removepublish.innerHTML = "Remove";
        removepublish.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        containpublish.appendChild(outerpublish);
        outerpublish.appendChild(ptitlediv);
        ptitlediv.appendChild(inputptitle);
        outerpublish.appendChild(publicationdetails);
        publicationdetails.appendChild(publisherdiv);
        publisherdiv.appendChild(inputpublisher);
        publicationdetails.appendChild(pdatediv);
        pdatediv.appendChild(inputpdate);
        outerpublish.appendChild(removepublish);

        removepublish.addEventListener('click', () => this.remove(outerpublish));

    }

    remove(publishes) {
        containpublish.removeChild(publishes);
    }

}

class awards {
    constructor(htitle, hissuer, hdate) {
        this.createcourse(htitle, hissuer, hdate);
    }

    createcourse(htitle, hissuer, hdate) {

        let inputhtitle = document.createElement('input');
        let inputhissuer = document.createElement('input');
        let inputhdate = document.createElement('input');

        inputhtitle.value = htitle;
        inputhtitle.type = "text";
        inputhtitle.disabled = true;
        inputhtitle.classList.add('form-control');

        inputhissuer.value = hissuer;
        inputhissuer.type = "text";
        inputhissuer.disabled = true;
        inputhissuer.classList.add('form-control');

        inputhdate.value = hdate;
        inputhdate.type = "date";
        inputhdate.disabled = true;
        inputhdate.classList.add('form-control');

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

        let removeaward = document.createElement('button');
        removeaward.innerHTML = "Remove";
        removeaward.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        containaward.appendChild(outeraward);
        outeraward.appendChild(htitlediv);
        htitlediv.appendChild(inputhtitle);
        outeraward.appendChild(hissuedetails);
        hissuedetails.appendChild(hissuerdiv);
        hissuerdiv.appendChild(inputhissuer);
        hissuedetails.appendChild(hdatediv);
        hdatediv.appendChild(inputhdate);
        outeraward.appendChild(removeaward);

        removeaward.addEventListener('click', () => this.remove(outeraward));

    }

    remove(awards) {
        containaward.removeChild(awards);
    }

}

class hobbies {
    constructor(hobby) {
        this.createhobby(hobby);
    }

    createhobby(hobby) {

        let inputhobby = document.createElement('input');
        inputhobby.value = hobby;
        inputhobby.disabled = true;
        inputhobby.classList.add('form-control');
        inputhobby.type = "text";

        let itemBox1 = document.createElement('div');
        itemBox1.classList.add('form-group');

        let itemBox2 = document.createElement('div');
        itemBox2.classList.add('input-group', 'mb3');

        let itemBox3 = document.createElement('div');
        itemBox3.classList.add('input-group-append');

        let removehobby = document.createElement('button');
        removehobby.innerHTML = "Remove";
        removehobby.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        containhobby.appendChild(itemBox1);
        itemBox1.appendChild(itemBox2);
        itemBox2.appendChild(inputhobby);
        itemBox2.appendChild(itemBox3);
        itemBox3.appendChild(removehobby);

        removehobby.addEventListener('click', () => this.remove(itemBox1));

    }

    remove(hobby) {
        containHobby.removeChild(hobby);
    }

}

function checkcourse() {
    if(course.value != "" && issuer.value != "" && idate.value != "") {
        new courses (course.value, issuer.value, idate.value);
            course.value = "";
            issuer.value = "";
            idate.value = "";
    }
}

function checkpublish() {
    if(ptitle.value != "" && publisher.value != "" && pdate.value != "") {
        new publishes (ptitle.value, publisher.value, pdate.value);
            ptitle.value = "";
            publisher.value = "";
            pdate.value = "";
    }
}

function checkaward() {
    if(htitle.value != "" && hissuer.value != "" && hdate.value != "") {
        new awards (htitle.value, hissuer.value, hdate.value);
            htitle.value = "";
            hissuer.value = "";
            hdate.value = "";
    }
}

function checkhobby() {
    if(hobbyname.value != ""){
        new hobbies(hobbyname.value);
        hobbyname.value = "";
    }
}

coursebtn.addEventListener('click', checkcourse);
publishbtn.addEventListener('click', checkpublish);
awardbtn.addEventListener('click', checkaward);
hobbybtn.addEventListener('click', checkhobby);