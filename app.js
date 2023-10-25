const DOMSelector = {

    form: document.getElementById("form"),
    h2Form: document.getElementById("h2"),
    imageForm: document.getElementById("img"),
    submitButton: document.getElementById("submit-button"),
    text: document.querySelectorAll(".op"),

};

console.log(DOMSelector.text);

const testTextArray = Array.from(DOMSelector.text);
console.log(testTextArray);

const gameCard = {

    gameName: DOMSelector.h2Form,
    gameImage: DOMSelector.imageForm

};

function makeCard(card_forGame) {



};

