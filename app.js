//console.log(DOMSelector.text);

//const testTextArray = Array.from(DOMSelector.text);
//console.log(testTextArray);

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

const DOMSelector = {

    form: document.getElementById("form"),
    h2Form: document.getElementById("h2"),
    imageForm: document.getElementById("img"),
    submitButton: document.getElementById("submit-button"),
    text: document.querySelectorAll(".op"),
    gallery: document.querySelector(".gallery")

};

const cardObj = {

    name: DOMSelector.h2Form.value,
    image: DOMSelector.imageForm.value

};

function clearFields(fieldValue) {

    fieldValue.value = ""

};

function remove() {
    
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn) =>
        btn.addEventListener("click", function(event) {
            event.target.parentElement.remove();
        })
    );
};

function create() {

    DOMSelector.gallery.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
            <img src="${cardObj.image}" class="image">
            <h2 class="h2">${cardObj.name}</h2>
            <button class="deletebutton">delete this entry</button>
        </div>
        `
    );

};


DOMSelector.submitButton.addEventListener ("click", function(event){

    event.preventDefault();
    create();
    clearFields(DOMSelector.h2Form);
    clearFields(DOMSelector.imageForm);
    remove();

});