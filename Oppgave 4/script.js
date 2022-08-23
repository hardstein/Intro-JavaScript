const numbersUl = document.getElementById("guess");
const guessUl = document.getElementById("numbers");
const button = document.querySelector("button")

const numbers = [];

const generateNumber = () => {
    return Math.floor(Math.random() * 9);
}

const fillNumbersArray = (numbersToFill) => {
    for (let j = 0; j < numbersToFill; j++) {
        let num = generateNumber()
            numbers.push(num)
    }
}

fillNumbersArray(4);
console.log(numbers)

const getGuess = () => {
    const answers = document.querySelectorAll("input");
    return Array.from(answers).map((guess) => guess.value);
};

const checkNumberSeq = () => {
    const guess = getGuess();
    console.log(guess)
    let isCorrect = numbers.sort().join("") === guess.join("");
    if (isCorrect) {
        alert("Du sorterte riktig");
    }
};

const addInputUI = () => {
    for (let num of numbers) {
        const li = `<li><input type="text"></li>`;
        guessUl.innerHTML += li;
    }
};

const addNumbersUI = () => {
    for (let num of numbers) {
        const li = `<li>${num}</li>`;
        numbersUl.innerHTML += li;
    }
};

const createUI = () => {
    addNumbersUI();
    addInputUI();
};

createUI();

button.addEventListener("click", checkNumberSeq);
