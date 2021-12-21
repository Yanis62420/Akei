let str = window.location.href

let url = new URL(str);

let prix = url.searchParams.get("prix");
let objet = url.searchParams.get("objet");

document.getElementById("objet").innerHTML = objet;
document.getElementById("prix").innerHTML = prix;
