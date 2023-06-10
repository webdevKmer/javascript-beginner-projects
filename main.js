// Entrer dans le supermarche
// Parcourir les rayons en achetant les produits
// Voir l'etat du panier.
// Afficher le cout du panier
// Payer ses courses et anoncer le montant depense
// Anoncer le solde dans le prote monnaie.
console.log("Bienvenue au Supermarche...")
let solde = 1500
console.log("Vous disposez de", solde, "Francs CFA!")
let rayons = [
    {
        nom: "charcuterie",
        produits : [
            {nom : "poisson", prix : 450},
            {nom : "boeuf", prix : 250},
            {nom : "porc", prix : 650},
        ] 
    },
    {
        nom: "boisson",
        produits : [
            {nom : "rose wein", prix : 200},
            {nom : "rot wein", prix : 180},
            {nom : "weiss wein", prix : 210},
        ] 
    }
]

rayons.forEach((obj) => {
    console.log("Bienvenue dans le rayon -->", obj.nom);
    console.log("Voici les produits disponibles.");
    for (let index = 0; index < obj.produits.length; index++) {
        console.log(obj.produits[index].nom, ":", obj.produits[index].prix, "FCFA")  
    }
    prompt("Que choississez vous : ");  
});