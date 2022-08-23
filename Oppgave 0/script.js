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

const nameInp = document.getElementById("name");
const orderBtn = document.getElementById("order");

const children = document.querySelector(".children");
const colorBtn = document.getElementById("color");


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
    liList.removeChild(liList.lastElementChild)
    // liList.removeChild(liList.childNodes[(liList.childElementCount)])
}

const checkInp = () => {
    const name = nameInp.value
    console.log(name.length)
    name.length >= 4 ? console.log("mer") : console.log("mindre")
    // name.length >= 4 ? orderBtn.style.borderColor = "red" : orderBtn.style.borderColor = "inherit"
    // Vil ikke gå tilbake fra disabled.
    name.length >= 4 ? orderBtn.disabled = "true" : orderBtn.disabled = "false"
}

const styleLiElements = () => {
    console.log(children)
    // https://stackoverflow.com/questions/17540153/apply-css-style-to-child-nodes
    for (let i = 0; i < children.childNodes.length; i++) {
        if (children.childNodes[i].tagName == "LI")
            children.childNodes[i].classList.add("borderColor")
    }
}


removeBtn.addEventListener("click", remove);
changeBtn.addEventListener("click", change);
textInp.addEventListener("input", printInputText);
writeListBtn.addEventListener("click", write);
createBtn.addEventListener("click", createElement);
removeLiBtn.addEventListener("click", removeListItem);
nameInp.addEventListener("input", checkInp);
colorBtn.addEventListener("click", styleLiElements);