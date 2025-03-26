//vado a richiamare le variabili del dom
const kilometer = document.getElementById("km")
const userAge = document.getElementById("age")
const confirmBtn = document.getElementById("btn")
let finalPrice = kilometer*0.21

//corpo del programma
button.addEventlistener("click", function(){

let kilometer = input.value.trim();
let userAge = input.value.trim();

if (userAge > 65) {
    finalPrice = finalPrice * 0.6;
}

if (userAge < 18) {
    finalPrice = finalPrice * 0.8;
}


})

