const data = {
    dateDebut : "2015",
    dateMAJ : "03-12-2020",
    nbInterventionsParPDQ : [
    { "PDQ": 1, "nbInterventions": 2096, "Emplacement":"Baie-D'Urfé, Beaconsfield, Kirkland, Sainte-Anne-de-Bellevue, Senneville"},
    { "PDQ": 3, "nbInterventions": 3182, "Emplacement":"L'Île-Bizard, Pierrefonds, Sainte-Geneviève, Roxboro"},
    { "PDQ": 4, "nbInterventions": 2351, "Emplacement":"Dollard-Des Ormeaux"},
    { "PDQ": 5, "nbInterventions": 5027, "Emplacement":"Dorval, L'Île-Dorval, Pointe-Claire"},
    { "PDQ": 7, "nbInterventions": 8140, "Emplacement":"Saint-Laurent"},
    { "PDQ": 8, "nbInterventions": 3902, "Emplacement":"Lachine, Saint-Pierre"},
    { "PDQ": 9, "nbInterventions": 1746, "Emplacement":"Côte Saint-Luc, Hampstead, Montréal-Ouest"},
    { "PDQ":10, "nbInterventions": 3526, "Emplacement":"Bordeaux, Cartierville"},
    { "PDQ":11, "nbInterventions": 4387, "Emplacement":"Notre-Dame-de-Grâce"},
    { "PDQ":12, "nbInterventions": 3911, "Emplacement":"Ville-Marie Ouest, Westmount"},
    { "PDQ":13, "nbInterventions": 4390, "Emplacement":"LaSalle"},
    { "PDQ":15, "nbInterventions": 6780, "Emplacement":"Saint-Paul, Petite-Bourgogne, Pointe-Saint-Charles, Saint-Henri, Ville-Émard"},
    { "PDQ":16, "nbInterventions": 4415, "Emplacement":"Île-des-Soeurs, Verdun"},
    { "PDQ":20, "nbInterventions":10202, "Emplacement":"Centre-ville (Ville-Marie Ouest), parc du Mont-Royal"},
    { "PDQ":21, "nbInterventions":10696, "Emplacement":"Centre-ville (Ville-Marie Est), île Notre-Dame, île Sainte-Hélène, Vieux-Montréal"},
    { "PDQ":22, "nbInterventions": 5328, "Emplacement":"Centre-Sud"},
    { "PDQ":23, "nbInterventions": 7210, "Emplacement":"Hochelaga-Maisonneuve"},
    { "PDQ":24, "nbInterventions": 2532, "Emplacement":"FERMÉ DÉFINITIVEMENT"},
    { "PDQ":26, "nbInterventions": 7178, "Emplacement":"Côte-des-Neiges, Mont-Royal, Outremont"},
    { "PDQ":27, "nbInterventions": 6764, "Emplacement":"Ahuntsic"},
    { "PDQ":30, "nbInterventions": 5206, "Emplacement":"Saint-Michel"},
    { "PDQ":31, "nbInterventions": 5180, "Emplacement":"Villeray"},
    { "PDQ":33, "nbInterventions": 2558, "Emplacement":"Parc-Extension"},
    { "PDQ":35, "nbInterventions": 6199, "Emplacement":"La Petite-Italie, La Petite-Patrie, Outremont"},
    { "PDQ":38, "nbInterventions":12993, "Emplacement":"Le Plateau-Mont-Royal"},
    { "PDQ":39, "nbInterventions": 8102, "Emplacement":"Arrondissement de Montréal-Nord"},
    { "PDQ":42, "nbInterventions": 6835, "Emplacement":"Saint-Léonard"},
    { "PDQ":44, "nbInterventions": 7312, "Emplacement":"Rosemont - La Petite-Patrie"},
    { "PDQ":45, "nbInterventions": 3984, "Emplacement":"Rivière-des-Prairies"},
    { "PDQ":46, "nbInterventions": 4006, "Emplacement":"Anjou"},
    { "PDQ":48, "nbInterventions": 8550, "Emplacement":"Arrondissement de Mercier-Hochelaga-Maisonneuve"},
    { "PDQ":49, "nbInterventions": 4557, "Emplacement":"Ville de Montréal-Est, Pointe-aux-Trembles"},
    { "PDQ":50, "nbInterventions": 1080, "Emplacement":"Métro de Montréal"},
    { "PDQ":55, "nbInterventions": 62, "Emplacement":"Aéroport international Pierre-Elliott-Trudeau de Montréal"},
    ]
    };
    
    function maximum (data)
    {
        let tab = new Array();
        let maximum;
        for (i = 0; i <data.nbInterventionsParPDQ.length; i++)
        {
            tab[i] = data.nbInterventionsParPDQ[i].nbInterventions;
        }
        maximum=Math.max(...tab);
        return maximum;
    }
    
    data.nbInterventionsParPDQ.sort(function compare(a, b)
     {
        if (a.nbInterventions < b.nbInterventions)
           return -1;
        if (a.nbInterventions > b.nbInterventions )
           return 1;
        return 0;
      });
    
    console.log(data);
    maximum(data);
    