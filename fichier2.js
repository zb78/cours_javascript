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

// for (const k in oo) {
//     const element = oo[k];
//     console.log(k , element)
// }


oo.films = ["terminator", "john wick"]
oo.films.push('tintin au tibet')
oo['langues'] = ["francais", "arabe"]

console.log(oo)