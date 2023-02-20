(() => {
    window.addEventListener("load", ()=>{
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

        /* Fonction d'activation/désactivation des boutons */
        let desactiveBouton = (bouton) => {
            bouton.setAttribute("disabled", true);
            bouton.style.cursor="default"
        }

        let activeBouton = (bouton) => {
            bouton.removeAttribute("disabled");
            bouton.style.cursor="pointer"
        }

        /* Désactivation initiale des boutons */
        desactiveBouton(boutonCreation);
        desactiveBouton(boutonModifier);
        desactiveBouton(boutonChercheModifier);
        desactiveBouton(boutonChercheSupprimer);

        /* Formulaires cachés */
        formulaireModifier.style.display = "none";
        formulaireSupprimer.style.display = "none";

        /* Fonction de mise à jour du statut du bouton */
        let majBouton = (bouton,text) => {
            if (bouton.disabled && text.value != '') {
                activeBouton(bouton)
            }
            if (bouton.disabled == false && text.value == '') {
                desactiveBouton(bouton)
            }
        }

        /* Activation/désactivation des boutons "submit" selon la complétion des champs du formulaire associé */
        dateRapport.addEventListener("input", function(){ majBouton(boutonCreation, dateRapport); });
        texteModifier.addEventListener("input", function(){ majBouton(boutonChercheModifier, texteModifier); });
        dateModifier.addEventListener("input", function(){ majBouton(boutonModifier, dateModifier); });
        texteSupprimer.addEventListener("input", function(){ majBouton(boutonChercheSupprimer, texteSupprimer); });

        /* Apparition/disparition des formulaires de modification/suppression à l'appui du bouton "submit" associé */
        boutonChercheModifier.onclick = function() {
            formulaireModifier.style.display = "Initial";
            window.location.search=texteModifier.value;
        }

        boutonModifier.onclick = function() {
            formulaireModifier.style.display = "none";
            texteModifier.value='';
            desactiveBouton(boutonChercheModifier);
        }

        boutonChercheSupprimer.onclick = function() {
            formulaireSupprimer.style.display = "Initial";
            window.location.search=texteModifier.value;
        }

        boutonSupprimer.onclick = function() {
            formulaireSupprimer.style.display = "none";
            texteSupprimer.value='';
            desactiveBouton(boutonChercheSupprimer);
        }
    })
})()