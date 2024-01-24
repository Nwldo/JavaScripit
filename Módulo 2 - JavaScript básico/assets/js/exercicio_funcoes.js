/* 1)
Calcule a prcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

*/



/*
2)
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.2x
- Se tiver 3 quarto, o m2 é 1.5x

*/
//Uso da função:
let metragem = 123;
let quantos = 3;
let preco = calcularImovel(metragem, quantos);
console.log(`A casa custa R$ ${preco}`);



/*
3)
Crie um função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/
//Uso da função:
let usuario = 'joão';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso CONCEDIDO');
}else {
    console.log('Acesso NEGADO!');
}

