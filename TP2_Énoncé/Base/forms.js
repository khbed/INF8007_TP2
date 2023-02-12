let dateRapport = document.getElementById("add_date_incident");
let boutonCreation = document.getElementById("add-submit");

let formulaireModifier = document.getElementById("form-modify-alter");
let texteModifier = document.getElementById("modify_no_intervention");
let boutonChercheModifier = document.getElementById("modify-search-submit");
let dateModifier = document.getElementById("modify_date_incident");
let boutonModifier = document.getElementById("modify-alter-submit");

let formulaireSupprimer = document.getElementById("form-remove");
let texteSupprimer = document.getElementById("remove_no_intervention");
let boutonChercheSupprimer = document.getElementById("remove-search-submit");
let boutonSupprimer = document.getElementById("remove-submit");


let desactiveBouton = (bouton) => {
    bouton.setAttribute("disabled", true);
    bouton.style.cursor="default"
}

let activeBouton = (bouton) => {
    bouton.removeAttribute("disabled");
    bouton.style.cursor="pointer"
}

desactiveBouton(boutonCreation);
desactiveBouton(boutonModifier);
desactiveBouton(boutonChercheModifier);
desactiveBouton(boutonChercheSupprimer);

formulaireModifier.style.display = "none";
formulaireSupprimer.style.display = "none";

let majBouton = (bouton,text) => {
    if (bouton.disabled && text.value != '') {
        activeBouton(bouton)
    }
    if (bouton.disabled == false && text.value == '') {
        desactiveBouton(bouton)
    }
}

dateRapport.addEventListener("input", function(){ majBouton(boutonCreation, dateRapport); });
texteModifier.addEventListener("input", function(){ majBouton(boutonChercheModifier, texteModifier); });
dateModifier.addEventListener("input", function(){ majBouton(boutonModifier, dateModifier); });
texteSupprimer.addEventListener("input", function(){ majBouton(boutonChercheSupprimer, texteSupprimer); });


boutonChercheModifier.onclick = function() {
    window.location='#nav-modify';
    formulaireModifier.style.display = "Initial";
}

boutonModifier.onclick = function() {
    window.location='#nav-modify';
    formulaireModifier.style.display = "none";
    texteModifier.value='';
    desactiveBouton(boutonChercheModifier);
}

boutonChercheSupprimer.onclick = function() {
    window.location='#nav-remove';
    formulaireSupprimer.style.display = "Initial";
}

boutonSupprimer.onclick = function() {
    window.location='#nav-remove';
    formulaireSupprimer.style.display = "none";
    texteSupprimer.value='';
    desactiveBouton(boutonChercheSupprimer);
}