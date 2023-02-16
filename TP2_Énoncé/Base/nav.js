(() => {
    window.addEventListener("load", ()=>{
        let lienRapport = document.getElementById("nav-report-tab");
        let declaration = document.getElementById("nav-add-tab");
        let modification = document.getElementById("nav-modify-tab");
        let retrait = document.getElementById("nav-remove-tab");
        let visualisation = document.getElementById("nav-chart-tab");
        let tableDeroulante = declaration.parentElement.previousElementSibling;
        let navigateur = {
            lieu : lienRapport, 
            type : "nav-link"
        };

        lienRapport.addEventListener("click", ()=> {
            window.location.hash = "#nav-report";
            navigateur.lieu=lienRapport;
            navigateur.type="nav-link";
        });

        declaration.addEventListener("click", ()=> {
            window.location.hash = "#nav-add";
            navigateur.lieu=declaration;
            navigateur.type="dropdown-item";
        });

        modification.addEventListener("click", ()=> {
            window.location.hash = "#nav-modify";
            navigateur.lieu=modification;
            navigateur.type="dropdown-item";
        });

        retrait.addEventListener("click", ()=> {
            window.location.hash = "#nav-remove";
            navigateur.lieu=retrait;
            navigateur.type="dropdown-item";
        });

        visualisation.addEventListener("click", ()=> {
            window.location.hash = "#nav-chart";
            navigateur.lieu=visualisation;
            navigateur.type="nav-link";
        });
        
        function activate(link){
            let linkDiv = document.getElementById(link.getAttribute("href").slice(1));
            link.className += " active";
            linkDiv.className += " show active"
        }

        function deactivate(nav){
            let navDiv = document.getElementById(nav.lieu.getAttribute("href").slice(1));
            nav.lieu.className = nav.type;
            navDiv.className = "tab-pane fade"
        }

        function rediriger(){
            switch(window.location.hash){
                case "#nav-add":
                    tableDeroulante.className = "nav-link dropdown-toggle active"
                    deactivate(navigateur);
                    window.location.href = "TP2_Base.html#nav-add";
                    navigateur.type="dropdown-item";
                    activate(declaration);
                    navigateur.lieu=declaration;
                    break;
                case "#nav-modify":
                    tableDeroulante.className = "nav-link dropdown-toggle active"
                    deactivate(navigateur);
                    window.location.href = "TP2_Base.html#nav-modify";
                    navigateur.type="dropdown-item";
                    activate(modification);
                    navigateur.lieu=modification;
                    break;
                case "#nav-remove":
                    tableDeroulante.className = "nav-link dropdown-toggle active"
                    deactivate(navigateur);
                    window.location.href = "TP2_Base.html#nav-remove";
                    navigateur.type="dropdown-item";
                    activate(retrait);
                    navigateur.lieu=retrait;
                    break;
                case "#nav-chart":
                    tableDeroulante.className = "nav-link dropdown-toggle"
                    deactivate(navigateur);
                    window.location.href = "TP2_Base.html#nav-chart";
                    navigateur.type="nav-link";
                    activate(visualisation);
                    navigateur.lieu=visualisation;
                    break;
                default:
                    tableDeroulante.className = "nav-link dropdown-toggle"
                    deactivate(navigateur);
                    window.location.href = "TP2_Base.html#nav-report";
                    navigateur.type="nav-link";
                    activate(lienRapport);
                    navigateur.lieu=lienRapport;
                    break;
            }
        }
        addEventListener('hashchange', rediriger);
    })
})()