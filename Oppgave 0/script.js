const removeText = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");

const changeText = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

const inputText = document.getElementById("input-text");
const textInp = document.getElementById("input");

const list = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

const emptyDiv = document.getElementById("placeholder");
const elementSelect = document.getElementById("select");
const elementText = document.getElementById("text");
const createBtn = document.getElementById("create");

const liList = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");


const remove = () => {
    removeText.innerHTML = ""
}

const change = () => {
    changeText.style.backgroundColor = "blue"
}

const printInputText = (e) => {
    inputText.textContent = e.target.value
}

const write = () => {
    const myList = ["item one", "item two", "item three"];
    list.innerHTML = null;
    for (let i = 0; i < myList.length; i++) {
        list.innerHTML += `<li>${myList[i]}</li>`;
    }
}

const createElement = () => {
    const child = document.createElement(elementSelect.value);
    child.textContent = elementText.value
    emptyDiv.appendChild(child)
}

const removeListItem = () => {
    console.log(liList.childNodes)
    console.log(liList.childElementCount)
    liList.remove()
    // liList.removeChild(liList.childNodes[(liList.childElementCount)])
}

removeBtn.addEventListener("click", remove);
changeBtn.addEventListener("click", change);
textInp.addEventListener("input", printInputText);
writeListBtn.addEventListener("click", write);
createBtn.addEventListener("click", createElement);
removeLiBtn.addEventListener("click", removeListItem);