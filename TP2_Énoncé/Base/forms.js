let dateRapport = document.getElementById("add_date_incident");
let boutonCreation = document.getElementById("add-submit");

boutonCreation.setAttribute("disabled", true);


let majBouton = () => {
    if (boutonCreation.disabled && dateRapport.value != '') {
        boutonCreation.removeAttribute("disabled");
    }
    if (boutonCreation.disabled == false && dateRapport.value == '') {
        boutonCreation.setAttribute("disabled", true);
    }
}

dateRapport.addEventListener("change", majBouton);