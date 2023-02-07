let dateRapport = document.getElementById("add_date_incident");
let boutonCreation = document.getElementById("add-submit");

boutonCreation.setAttribute("disabled", true);

function majBouton(date, bouton) {
    if(bouton.disabled && date.value != ''){
        bouton.deleteAttribute("disabled");
    }
    if(bouton.disabled==false && date.value == ''){
        bouton.setAttribute("disabled", true);
    }
    console.log("test")
}

window.setInterval(majBouton(dateRapport, boutonCreation), 1000);