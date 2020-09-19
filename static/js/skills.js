// Select the add button
const addButton = document.querySelector('.addBtn');

// Select the input value
var takeInput = document.querySelector('.addText');

// Select the container to store the skills
const containSkill = document.querySelector('.containSkill');

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
        input.classList.add('skill_names');
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
        containSkill.appendChild(itemBox1);
        itemBox1.appendChild(itemBox2);
        itemBox2.appendChild(input);
        itemBox2.appendChild(itemBox3);
        itemBox3.appendChild(removeBtn);

        // To remove the skill
        removeBtn.addEventListener('click', () => this.remove(itemBox1));

    }

    // Remove function
    remove(item) {
        containSkill.removeChild(item);
    }
}

// To convert an input to color
function change_color_on_empty(element) {
  if(element.value.length == 0)
    element.style.background = "#ffcccc";
  else
    element.style.background = "#ffffff";
}

// To check if the input field is empty or not.
function check() {
    if(takeInput.value != ""){
        new item(takeInput.value);
        takeInput.value = "";
    } else {
      change_color_on_empty(takeInput);
    }
}

// Add button to add the skill
addButton.addEventListener('click', check);

function get_inputs_by_classname(classname) {
  var value = "";
  $('.' + classname).each(function() {
    value += $(this).val() + "~~~";
  });

  return value;
}

$("#skill-save").click(function() {
  var skill_names = get_inputs_by_classname("skill_names");

  $.ajax({
    url: "/skills",
    type: "post",
    data: {"skill_names": skill_names},
    success: function(result) {
      Swal.fire({
        icon: result.icon,
        title: result.title,
        text: result.text
      });
    }
  });
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
