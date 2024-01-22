let idade = 90;

if (idade > 17){
    console.log("Você é MAIOR de idade.");
}else{
    console.log("Você é MENOR de idade.");
}


// <
// >
// == igual
// >=
// <=
// !=

let idade1 = "20";

if (idade1 == 20){
    console.log("Você é MAIOR de idade.")
}

// funcinou porque os valores são semelhantes - uso do ==
// para ser mais rigoroso usa-se ===

if (idade1 === 20){
    console.log("Você é MAIOR de idade.")
}

if (idade1 == 20){
    idade1 = idade1 + 15;
    console.log("Idade adicionada com sucesso!");
    console.log(idade1);
}

// and (&&)
// OU (||)

if (idade >= 18 && idade< 60){
    console.log("Você é um adulto");
}


// condicional dupla

// condicionais independentes
if (idade <= 18){
    console.log("Você é uma criança.")
}

if (idade >= 18 && idade <= 60){
    console.log("Você é um adulto");
}

if (idade > 60){
    console.log("Você é uma criança.")
}

// condicionais dependentes
if (idade < 18){
    console.log("Você é uma criança.")
}else if (idade >= 18 && idade < 60){
    console.log("Você é um adulto");
}else if (idade > 60){
    console.log("Você é uma criança.")
}


// outros exemplos
let adulto = idade >= 18 && idade < 60;

if (adulto){
    console.log("É adulto")
}else{
    console.log("Não é adulto")
}

//
console.log(idade > 18);

//
if(true){
    console.log("Entrou")
}


// Switch
let profession = "fiscal";

console.log("Profissão: " + profession);

switch (profession){
    case 'fical':
        console.log('Sua comisa será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua comisa será VERMELHA');
        break;
    case 'policial':
        console.log('Sua comisa será AZUL');
        break;
    default:
        break;
}