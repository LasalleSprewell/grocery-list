const submit = document.getElementById("submit-btn");
const typeBox = document.getElementById("type-box");
const list = document.getElementById("list");
const clearout = document.getElementById("clearout");

// Creates the individual list item
function createListItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(typeBox.value));
    list.appendChild(li);
    typeBox.value = "";
}

//As long as the string isnt empty, it will add the list item by pressing the Enter button on your keyboard
function addListAfterKeypress(event) {
    if (typeBox.value.length > 0 && event.keyCode === 13) {
        createListItem();
    }
}
//As long as the string isnt empty, it will add the list item by pressing the Submit button
function addListAfterEnter() {
    if (typeBox.value.length > 0) {
        createListItem();
    }
}

submit.addEventListener("click", addListAfterEnter);
typeBox.addEventListener("keypress", addListAfterKeypress);

//Lets you delete all the list items by pressing "Clear Items"
clearout.addEventListener("click", function(){
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
});

// When clicked can delete any of the list items
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.remove();
    }
  });