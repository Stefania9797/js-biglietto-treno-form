//Creiamo un finto biglietto del treno con:
//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato
//Categoria selezionata dall'utente

//Quando l'utente clicca su genera
var btnGenera = document.getElementById("genera");
btnGenera.addEventListener("click" , function(){
    //"il tuo biglietto" appare al click su genera
    document.getElementById("bottom-div").classList.add("d-block");
    //"valori" del form
    var nomePassegero = document.getElementById("nome").value;
    var distanza = document.getElementById("distanza").value;
    var età = document.getElementById("età").value;
        //se l'utente non compila tutti i campi il biglietto non viene generato
        if(nomePassegero==""||distanza==""){
            alert("Inserisci tutti i dati richiesti!")
            document.getElementById("bottom-div").classList.remove("d-block");
        }
        //calcolo prezzo
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
        //carrozza
        var carrozza = Math.floor(Math.random() * 10) + 1;
        //codice cp
        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        var codice = randomNumber(90000, 100000)
        //generazione dati sulla pagina
        document.getElementById("carrozza").innerHTML = carrozza;
        document.getElementById("codice").innerHTML = codice;
        document.getElementById("dato_nome_utente").innerHTML = nomePassegero;
        document.getElementById("offerta").innerHTML = tipoOfferta;
        document.getElementById("costo").innerHTML = prezzoFinale + "€";
    })
    //click su annulla
    var btnAnnulla = document.getElementById("annulla");
    btnAnnulla.addEventListener("click" , function(){
        //dati biglietto
        document.getElementById("carrozza").innerHTML = "";
        document.getElementById("codice").innerHTML = "";
        document.getElementById("dato_nome_utente").innerHTML = "";
        document.getElementById("offerta").innerHTML = "";
        document.getElementById("costo").innerHTML = "";
        //dati utente
        document.getElementById("nome").value = "";
        document.getElementById("distanza").value = "";
        document.getElementById("età").value = "";
    })