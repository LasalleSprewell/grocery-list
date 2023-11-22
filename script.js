const submit = document.getElementById("submit-btn");
const typeBox = document.getElementById("type-box");
const list = document.getElementById("list");
const clearout = document.getElementById("clearout");

function createListItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(typeBox.value));
    list.appendChild(li);
    typeBox.value = "";
}

function addListAfterKeypress(event) {
    if (typeBox.value.length > 0 && event.keyCode === 13) {
        createListItem();
    }
}

function addListAfterEnter() {
    if (typeBox.value.length > 0) {
        createListItem();
    }
}

submit.addEventListener("click", addListAfterEnter);
typeBox.addEventListener("keypress", addListAfterKeypress);

clearout.addEventListener("click", function(){
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
});