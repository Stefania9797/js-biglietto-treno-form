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

        var distanza = document.getElementById("distanza").value;
        console.log("Km da percorrere:", distanza);

        var età = document.getElementById("età").value;
        console.log("Età:", età);

        var prezzo = Math.floor(distanza * 0.21);
        var sconto;
        var tipoOfferta;

        // calcolo sconto per età
        if (età == "minorenne") {
            sconto = (prezzo * 0.2).toFixed(2); 
            tipoOfferta = "Offerta Minorenni";
        } else if (età =="over65") {
            sconto = (prezzo * 0.4).toFixed(2);
            tipoOfferta = "Offerta Over 65";
        } else {
            sconto = 0;
            tipoOfferta = "Nessuna offerta";
        }
        var prezzoFinale=(prezzo - sconto).toFixed(2);
        console.log(prezzoFinale);
})