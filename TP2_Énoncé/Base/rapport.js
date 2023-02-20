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
        window.setTimeout(() => {surligner()},1000);
    })
})()

// ----------------------------------------------- Code Sébastien Dupuis 16/02/2023 ---------------------------------------
function compare (a,b)
{
    if(a.nbInterventions < b.nbInterventions){return 1 }
    else if (a.nbInterventions > b.nbInterventions) {return -1}
    else return 0;
}    

function median(data)
{
    var MonTableau = [];
    let length = data.nbInterventionsParPDQ.length
    let tableMedian =  data.nbInterventionsParPDQ.length / 2;
    if (length %2 ==0){
        MonTableau[0]=data.nbInterventionsParPDQ.sort(compare)[tableMedian].nbInterventions;
        MonTableau[1]=data.nbInterventionsParPDQ.sort(compare)[tableMedian-1].nbInterventions;
        return MonTableau;
    }
    else{
        MonTableau[0]=data.nbInterventionsParPDQ.sort(compare)[Math.floor(tableMedian)-1];
        return MonTableau;
    }
}

function maximum (data)
{
    let tab = new Array();
    let max;
    for (i = 0; i <data.nbInterventionsParPDQ.length; i++)
    {
        tab[i] = data.nbInterventionsParPDQ[i].nbInterventions;
    }
    max=Math.max(...tab);
    return max;
}
function minimum (data)
{
    let tab = new Array();
    let min;
    for (i = 0; i <data.nbInterventionsParPDQ.length; i++)
    {
        tab[i] = data.nbInterventionsParPDQ[i].nbInterventions;
    }
    min=Math.min(...tab);
    console.log(min)
    return min;
}

function calculerStatistiques(data){
    var result = {
        max : maximum(data),
        min : minimum(data),
        median : median(data)
    };
    return result;
}

function surligner()
{
    let infoClass = {
        classBadgeLight : "badge badge-light ml-3",
        classWarning : "bg-warning",
        classDanger : "bg-danger",
        classSuccess : "bg-success"
    }

    let mytablebody = document.getElementsByTagName("tbody")[0];

    for (let i =0; i <data.nbInterventionsParPDQ.length; i++)
    {
        let myrow = mytablebody.getElementsByTagName("tr")[i];
        let mycel = myrow.getElementsByTagName("td")[2];
        // premier élément du noeud liste des enfants de mycel
        myceltext=mycel.childNodes[0].textContent;
        let span = document.createElement ("span");

        let texteSpanWarning = document.createTextNode("Région Moyennement touchée");
        let texteSpanDanger = document.createTextNode("Région la plus touchée");
        let texteSpanSuccess = document.createTextNode("Région la moins touchée");

        span.setAttribute("class", infoClass.classBadgeLight)

        //Surligner median
        for(var medianValue of calculerStatistiques(data).median){
            if (myceltext == medianValue){
                //console.log(myceltext)
                span.appendChild(texteSpanWarning);
                myrow.setAttribute("class", infoClass.classWarning);
                let myCelToChange = myrow.getElementsByTagName("td")[1];
                myCelToChange.appendChild(span);
            }
        }

        // Surligner Maximum
        if (myceltext == calculerStatistiques(data).max){
            span.appendChild(texteSpanDanger);
            myrow.setAttribute("class", infoClass.classDanger);
            let myCelToChangeColor = myrow.getElementsByTagName("td")[2];
            myCelToChangeColor.setAttribute("class","text-white text-right");
            let myCelToChange = myrow.getElementsByTagName("td")[1];
            myCelToChange.appendChild(span);
        }
        // Surligner minimum
        if (myceltext == calculerStatistiques(data).min){
            span.appendChild(texteSpanSuccess);
            myrow.setAttribute("class", infoClass.classSuccess);
            let myCelToChangeColor = myrow.getElementsByTagName("td")[2];
            myCelToChangeColor.setAttribute("class","text-white text-right");
            let myCelToChange = myrow.getElementsByTagName("td")[1];
            myCelToChange.appendChild(span);
        }

    }
}

// ----------------------------------------------------------------------------------------------------------------
