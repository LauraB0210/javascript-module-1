var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameMayuscula (mentor){
    const nameMayuscula = mentor.toUpperCase();
    return nameMayuscula;
}

function saludo(mentor){
    return "Hola " + " " + nameMayuscula (mentor)
}

console.log(saludo(mentor1));
console.log(saludo(mentor2));
console.log(saludo(mentor3));
console.log(saludo(mentor4));
console.log(saludo(mentor5));
