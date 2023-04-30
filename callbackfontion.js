/**
 * @param {String} nom 
 */
function affiche(nom) {
    console.log( nom + " Le boss");
}

/**
 * @param {string} name 
 * @param {Function} uneFonctionDeCallBack
 */
function fonctionPrincipale(uneFonctionDeCallBack, name = "Yavuz") {
    if(uneFonctionDeCallBack )  {
        uneFonctionDeCallBack(name);
    }
    
}

fonctionPrincipale( affiche, "LAsad");

const mavarible = [];
mavarible.push('des choises');
mavarible.push(2);

const tab = ['encore des chose']
mavarible.push(tab)

const o = {
    "nom": "CAKIR",
    prenom: 'Yavuz',
    age: 42,
    adresse : {
        ligne1: "square jean lurçat",
        cp: 78190,
        ville: "trappes"
    }
}
mavarible.push(o)

console.log(mavarible, o.nom, o.adresse.ville, o?.toto?.tata)

const function1 = function(){
    console.log("funciton 1")
}

function1()

const function2 = () => {
    console.log("foinction fleché")
}

function2()

const fonc3 = function () {
    return 3
}

const fonc4 = () => {
    return 4
}

const fonc5 = () => 5 //5 > 4 


console.log(fonc3(), fonc4(), fonc5())

const fonc6 = (param1, param2) => console.log(param1, param2)

fonc6("param1", "mon param 2")

const fonc7 = param1 => console.log(param1)

fonc7("mon param1 de fonc7")

const oo = {
    "nom": "CAKIR",
    prenom: 'Yavuz',
    age: 42,
    adresse : {
        ligne1: "square jean lurçat",
        cp: 78190,
        ville: "trappes"
    },
    getNom() {
        console.log(this.nom + ' '+ this.prenom)
    },

    getAge :  function() {
        console.log(this.age);
    }

}

oo.getNom()
oo.getAge()

const key = "prenom"
console.log(oo["nom"], oo[key])

