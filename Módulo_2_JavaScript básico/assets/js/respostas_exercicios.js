/*  ============ Exercicios de Funções ====================

1.
Calcule a prcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

*/
// 1.
function calcPct(x,y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


/*
2.
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.2x
- Se tiver 3 quarto, o m2 é 1.5x

*/

function calcularImovel(metragem, quartos) {
    let m2 = 3.000;
    let valor = 0;

    switch(quartos, quartos){
        case quartos = 1:
        default:
            valor = metragem * m2;
            break;
        case quartos = 2:
            valor = metragem * (m2 * 1.2);
            break;
        case quartos = 3:
            valor = metragem * (m2 * 1.5);
            break;
    }
    return valor
}

let metragem = 123;
let quantos = 3;
let preco = calcularImovel(metragem, quantos);
console.log(`A casa custa R$ ${preco}`);

/*
3)
Crie um função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123

//Uso da função:
let usuario = 'joão';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso CONCEDIDO');
}else {
    console.log('Acesso NEGADO!');
}

*/

function validar(usuario, senha) {
    if (usuario == 'pedro' && senha == '123') {
        return true;
    }else {
        return false;
    }
}

let usuario = 'joão';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso CONCEDIDO');
}else {
    console.log('Acesso NEGADO!');
}



/* ============ Exercicios com array ===================
// 1. no array abaixo, qual o número que pega a Ferrari?

*/

let carros = ['BMW', 'Ferrari', 'Mercedes'];
let car = 1;
console.log(carros[car]);

// 2. Troque a Ferrari por Audi
carros[1] = 'Audi'
console.log('lista com Audi: ');
console.log(carros);

// 3. Adicione o Volvo a lista
carros.push('Volvo');
console.log('Lista com Volvo: ');
console.log(carros);

// 4. Exiba quantos itens tem array
console.log('4. itens no array: ');
console.log(`Total de carros ${carros.length}`);




// ============= Exercicio loop e while ==========================
// 1. Faça um loop que mostre todas a frutas
let frutas = ['Maça', 'Uva', 'Banana'];

for(let i in frutas) {
    console.log(frutas[i]);
}

// 2.  Conte de 1 até 100 usando WHILE
let cont = 1;
while(cont <= 100) {
    console.log(`O número da vez é ${cont}`)
    cont++;
}


