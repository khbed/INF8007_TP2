(() => {

    function remplirTableau() {
        let tableauInterventions = document.getElementById("interventions-par-poste");

        for (let intervention of data.nbInterventionsParPDQ){

            let tableRow = document.createElement("tr");

            let pdqDiv = document.createElement("td");
            let nbInterventionsDiv = document.createElement("td");
            let emplacementDiv = document.createElement("td");

            let pdqText = document.createTextNode(intervention.PDQ);
            pdqDiv.appendChild(pdqText);

            let emplacementText = document.createTextNode(intervention.Emplacement);
            emplacementDiv.appendChild(emplacementText);

            let nbInterventionsText = document.createTextNode(intervention.nbInterventions);
            nbInterventionsDiv.appendChild(nbInterventionsText);
            nbInterventionsDiv.className = "text-right";

            tableRow.appendChild(pdqDiv);
            tableRow.appendChild(emplacementDiv);
            tableRow.appendChild(nbInterventionsDiv);
            tableauInterventions.appendChild(tableRow);
        }
    }

    function ajouterTotal() {
        let tableauInterventions = document.getElementById("interventions-par-poste");
        let total = 0;

        for (let i = 0; i < data.nbInterventionsParPDQ.length; i++) {
            total += data.nbInterventionsParPDQ[i].nbInterventions;
        }

        let tableRow = document.createElement("tr");

        let pdqDiv = document.createElement("td");
        let nbInterventionsDiv = document.createElement("td");
        let emplacementDiv = document.createElement("td");

        let pdqText = document.createTextNode("Total:");
        pdqDiv.appendChild(pdqText);

        let emplacementText = document.createTextNode("");
        emplacementDiv.appendChild(emplacementText);

        let nbInterventionsText = document.createTextNode(total);
        nbInterventionsDiv.appendChild(nbInterventionsText);
        nbInterventionsDiv.className = "text-right";

        tableRow.appendChild(pdqDiv);
        tableRow.appendChild(emplacementDiv);
        tableRow.appendChild(nbInterventionsDiv);

        tableRow.className = "bg-dark text-white font-weight-bold";
        tableauInterventions.appendChild(tableRow);

    }

    window.addEventListener("load", ()=>{
        remplirTableau();
        ajouterTotal();
    })
})()