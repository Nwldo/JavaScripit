// condicional ternário

let isMember = true;

// certo deve ser igual a 2 o errado igual a 10
let shipping = isMember ? 2 : 10;

console.log(isMember ? "você é membro" : "você é membro");
console.log("Frete: " + shipping);


let age = 90;

let isAdult = (age >= 18 ? 'Sim' : 'Não');

//let isAdult = ((age >= 18 && < 60) ? 'Sim' : 'Não');

console.log(isAdult);