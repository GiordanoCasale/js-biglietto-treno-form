//vado a richiamare le variabili del dom
const button = document.getElementById("btn");

//richiamo le variabili per le card
let passenger = document.getElementById("passengername")
let distance = document.getElementById("distance")
let Age = document.getElementById("passengerage")
let finalCost = document.getElementById("finalcost")
//corpo del programma
button.addEventListener("click", function (event) {
    event.preventDefault();
    const elementKilometer = document.getElementById("km").value;
    const elementUserAge = document.getElementById("age").value;
    const elementName = document.getElementById("name")
    let finalPrice = (elementKilometer * 0.21).toFixed(2);
//andiamo a definire il calcolo 
    if (elementUserAge > 65) {
        finalPrice = (finalPrice * 0.6).toFixed(2);
        Age.innerHTML = "Sconto del 40%";
    }
    else if (elementUserAge < 18) {
        finalPrice = (finalPrice * 0.8).toFixed(2);
        Age.innerHTML = "Sconto del 20%"
    }

    else{
        Age.innerHTML = "tariffa normale"
    }


//andiamo a inserire i valori dentro le card
passenger.innerHTML=elementName.value;
distance.innerHTML= elementKilometer;
finalCost.innerHTML = finalPrice;



    console.log("il prezzo totale è di " + finalPrice + "€");

})

