//Creiamo un finto biglietto del treno con:
//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato
//Categoria selezionata dall'utente

//Quando l'utente clicca su genera
var btnGenera = document.getElementById("genera");
btnGenera.addEventListener("click" , function(){
    var nomePassegero = document.getElementById("nome").value;
        console.log("Nome del passeggero:", nomePassegero);

        var distanza = document.getElementById("kilometri").value;
        console.log("Km da percorrere:", distanza);

        var età = document.getElementById("select_età").value;
        console.log("Età:", età);

        var prezzo = Math.floor(km * 0.21);
        var discount;
        var discountType;

})