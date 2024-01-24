// Exercício 1
function calcPct(x,y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


// Exercício 2
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


// Exercicio 3
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
