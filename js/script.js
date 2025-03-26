//vado a richiamare le variabili del dom
const button = document.getElementById("btn");


//corpo del programma
button.addEventListener("click", function (event) {
    event.preventDefault();
    const elementKilometer = document.getElementById("km").value;
    const elementUserAge = document.getElementById("age").value;
    let finalPrice = (elementKilometer * 0.21).toFixed(2);

    if (elementUserAge > 65) {
        finalPrice = (finalPrice * 0.6).toFixed(2);
    }else if (elementUserAge < 18) {
        finalPrice = (finalPrice * 0.8).toFixed(2);
    }




    console.log("il prezzo totale è di " + finalPrice + "€");

})

