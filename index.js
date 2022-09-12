//variables
var x = 5;
var y = 10;
var z = x + y;

//chaîne de textes
let string = "Hello, world!"

let prenom = `Dylan`;

let presentation = `Salut à tous mon prénom est ${prenom}`; 

//console.log(presentation);

let livre = {
    titre: 'Harry Potter et le Prince de sang-mêlé',
    auteur: 'JK Rollings',
    pages: '720',
    disponible: true
}

let titreDuLivre = livre.titre;
let nbreDePages = livre.pages;

//console.log(livre.disponible)

//class
class Livre {
    constructor(titre,auteur,pages) {
        this.titre = titre;
        this.auteur = auteur;
        this.pages = pages;
    }
}

/*plusieurs
lignes de
commentaire*/

let monLivre = new Livre("La planète des singes", "Pierre Boulle", 274);
//console.log(monLivre.titre)

//Tableaux

let developers = ["Rarib LAAMIMAT", "Simone WEIL", "Jeremy Lemoine", 3];

//console.log(developers[0]);
let nbreDePersonnes = developers.length;
//console.log(nbreDePersonnes)
developers.push("Fred LELOUCH");
//console.log(developers)
developers.unshift("Severine PALAMBA")
//console.log(developers)
developers.pop()
//console.log(developers)

//conditions

/*let estConnecte = false;

if (estConnecte) {
    console.log("connexion établie")
} else {
    console.log("connexion échouée")
}*/

//conditions expression de comparaison

let scorePSG = 12;
let scoreRealMadrid = 12;

if(scorePSG > scoreRealMadrid) {
    console.log("vous êtes en train de rêver retournez travailler")
} else if(scorePSG < scoreRealMadrid) {
    console.log("Bah logique!")
} else {
    console.log("Quoi ! match nul !!")
}