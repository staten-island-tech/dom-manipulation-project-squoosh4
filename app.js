const DOMSelector = {

    form: document.getElementById("form"),
    h2Form: document.getElementById("h2"),
    imageForm: document.getElementById("img"),
    submitButton: document.getElementById("submit-button"),
    text: document.querySelectorAll(".op"),
    gallery: document.querySelector(".gallery")

};

console.log(DOMSelector.text);

const testTextArray = Array.from(DOMSelector.text);
console.log(testTextArray);

//const gameCard = {
//
//    gameName: DOMSelector.h2Form,
//    gameImage: DOMSelector.imageForm
//
//};

//function makeCard() {
//
//    const card = {
//
//        gameName: DOMSelector.h2Form,
//        imageAddress: DOMSelector.imageForm
//
//    }
//
//};

function clearFields(fieldValue) {

    fieldValue.value = ""

};

DOMSelector.submitButton.addEventListener ("click", function(){

    event.preventDefault();
    DOMSelector.gallery.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
            <img src="${DOMSelector.imageForm}" class="image">
            <h2 class="h2">${DOMSelector.h2Form}</h2>
        /div>
        `
    );
    clearFields(DOMSelector.h2Form);
    clearFields(DOMSelector.imageForm);

});

