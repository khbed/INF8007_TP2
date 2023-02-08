let dateRapport = document.getElementById("add_date_incident");
let boutonCreation = document.getElementById("add-submit");
let texteModifier = document.getElementById("modify_no_intervention");
let boutonChercheModifier = document.getElementById("modify-search-submit");
let dateModifier = document.getElementById("modify_date_incident");
let boutonModifier = document.getElementById("modify-alter-submit");
let texteSupprimer = document.getElementById("remove_no_intervention");
let boutonChercheSupprimer = document.getElementById("remove-search-submit");
let boutonSupprimer = document.getElementById("remove-submit");

boutonCreation.setAttribute("disabled", true);
boutonCreation.style.cursor="default"

boutonModifier.setAttribute("disabled", true);
boutonModifier.style.cursor="default"

boutonChercheModifier.setAttribute("disabled", true);
boutonChercheModifier.style.cursor="default"

boutonChercheSupprimer.setAttribute("disabled", true);
boutonChercheSupprimer.style.cursor="default"

document.getElementById("form-modify-alter").style.display = "none";
document.getElementById("form-remove").style.display = "none";

let majBouton = (bouton,text) => {
    if (bouton.disabled && text.value != '') {
        bouton.removeAttribute("disabled");
        bouton.style.cursor="pointer"
    }
    if (bouton.disabled == false && text.value == '') {
        bouton.setAttribute("disabled", true);
        bouton.style.cursor="default"
    }
}

dateRapport.addEventListener("input", function(){ majBouton(boutonCreation, dateRapport); });
texteModifier.addEventListener("input", function(){ majBouton(boutonChercheModifier, texteModifier); });
dateModifier.addEventListener("input", function(){ majBouton(boutonModifier, dateModifier); });
texteSupprimer.addEventListener("input", function(){ majBouton(boutonChercheSupprimer, texteSupprimer); });

boutonChercheModifier.onclick = function() {
    window.location='#nav-modify';
    document.getElementById("form-modify-alter").style.display = "Initial";
}

boutonModifier.onclick = function() {
    window.location='#nav-modify';
    document.getElementById("form-modify-alter").style.display = "none";
    texteModifier.value='';
    boutonChercheModifier.setAttribute("disabled", true);
    boutonChercheModifier.style.cursor="default"
}

boutonChercheSupprimer.onclick = function() {
    window.location='#nav-remove';
    document.getElementById("form-remove").style.display = "Initial";
}

boutonSupprimer.onclick = function() {
    window.location='#nav-remove';
    document.getElementById("form-remove").style.display = "none";
    texteSupprimer.value='';
    boutonChercheSupprimer.setAttribute("disabled", true);
    boutonChercheSupprimer.style.cursor="default"
}