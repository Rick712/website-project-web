//beetje hulp van Servin Nissen, de Javascript god

function inloggen() {
    "use strict";
    document.querySelector("#login").addEventListener("click", function (event) {
        event.preventDefault();
        var gebruikersNaam = document.querySelector("#gn").value;
        var wachtWoord = document.querySelector("#ww").value;
        if (gebruikersNaam === "Rick712" && wachtWoord === "azalkmaar") {
            window.location.href = "index-ingelogd.html";
        }
    
        if (gebruikersNaam === "" && wachtWoord === "") {
            var foutWW = document.querySelector("#bericht");
            foutWW.innerHTML = ("U moet wel iets invoeren.");
            console.log(event.target.href);
        } else {
            var foutWW = document.querySelector("#bericht");
            foutWW.innerHTML = ("Uw gebruikersnaam en wachtwoord komen niet overeen. Probeer het opnieuw");
        }
    });

}
inloggen();