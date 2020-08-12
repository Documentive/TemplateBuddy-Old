// Select the add button
const addButton = document.querySelector('.addBtn');

// Select the input value
var takeInput = document.querySelector('.addText');

// Select the container to store the interests/hobbies
const containHobby = document.querySelector('.containHobby');

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

// To check if the input field is empty or not.
function check() {
    if(takeInput.value != ""){
        new item(takeInput.value);
        takeInput.value = "";
    }
}

// Add button to add the hobby/interest
addButton.addEventListener('click', check);