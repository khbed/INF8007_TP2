(() => {
    window.addEventListener("load", ()=>{
        window.location = "#nav-report";

        let lienRapport = document.getElementById("nav-report-tab");
        let declaration = document.getElementById("nav-add-tab");
        let modification = document.getElementById("nav-modify-tab");
        let retrait = document.getElementById("nav-remove-tab");
        let visualisation = document.getElementById("nav-chart-tab");

        lienRapport.addEventListener("click", ()=> {
            window.location.hash = "#nav-report";
        });

        declaration.addEventListener("click", ()=> {
            window.location.hash = "#nav-add";
        });

        modification.addEventListener("click", ()=> {
            window.location.hash = "#nav-modify";
        });

        retrait.addEventListener("click", ()=> {
            window.location.hash = "#nav-remove";
        });

        visualisation.addEventListener("click", ()=> {
            window.location.hash = "#nav-chart";
        });

        function rediriger(){
            switch(window.location.hash){
                case "#nav-report":
                    window.location.href = "TP2_Base.html#nav-report";
                    break;
                case "#nav-add":
                    window.location.href = "TP2_Base.html#nav-add";
                    break;
                case "#nav-modify":
                    window.location.href = "TP2_Base.html#nav-modify";
                    break;
                case "#nav-remove":
                    window.location.href = "TP2_Base.html#nav-remove";
                    break;
                case "#nav-chart":
                    window.location.href = "TP2_Base.html#nav-chart";
                    break;
                default:
                    window.location.href = "TP2_Base.html#nav-report";
                    break;
            }
        }
        rediriger();
        window.addEventListener('hashchange', rediriger);
        
    })
})()