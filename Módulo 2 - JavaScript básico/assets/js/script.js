// O que é um função --> é um bloco de código que executa alguma operação

// criando função
// Declarando função
function gravidade() {
    console.log('A gravidade do planeta é:');
    console.log(9.8)
}

// como usar a função
gravidade();

//Parâmentros
// A função pode receber como parâmetros variáveis que só existem dentro da função
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}
// Como usar uma função
somar(12, 8);

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Nwldo", "Oliveira");
nomeCompleto("Chica", "Paula");


// Retorno da função
// Funções podem ter retorno - pra armazenar o returno cria-se variável
function uf(cidade, estado) {
    return `${cidade}/${estado}`;
}

let completo = uf("Teresina", "PI");
console.log(completo);

// Função com retorno condicional
// Uma função só pode ter um return 
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    }else {
        return false;
    }
}

let idade = 5
let verificacao = maiorDeIdade(idade);
console.log(verificacao);

if (verificacao) {
    console.log('É maior de idade');
}else {
    console.log('É menor de idade');
}


//=========== Arrow Function =================
// Cria funções de forma diferente com menos códigos

/* Forma tradicional
function somar(x, y) {
    return x + y;
}


// Com arrow function --> () => {}
const somar = (x, y) => {
    return x + y;
}
*/
// Função com apenas um linha pode ser feita assim
const multiplicar = (x, y) => x * y; //aqui já é o return

// Ainda é possível reduzir função com apenas um parâmetro
/*
function sobrenome(sob) {
    return 'Nwldo' + sob;
}

*/
const sobrenome = (sob) => 'Nwldo' + sob;

console.log(sobrenome('Oliveira'));


// Variáveis dentro de funções
/**
 Variáveis criadas dentro de funções pertencem ao contexto da função
 function add() {
    let count = 0;
    count++;
 }

 add()
 add()
 console.log(count)

 Ao passo que variáveis criadas fora podem ser usadas pelas funções
 let count = 0; --> variável de escopo global

 function add() {
    
    count++;
 }
add()
add()
console.log(count)
 */

let count = 0; // --> variável de escopo global

 function add() {
    count = 0; // --> variável de escopo local
    count++;
 }
add()
add()

console.log(count)

// resultado será zero! porque?
/*
Quando as variáveis tiver o mesmo nome, dentro da função o escopo é local, ou seja, será
usada a variável local e depois que terminar sua chamada a variável local deixa de existir.

No último trecho de código será usada a variável de escopo global

*/


/* Funções dentro de funções
function square(x) {
    return x * x;
}

function addSquares(a, b) {
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));

*/
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));

// ou 
function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));


// Introdução a Array
let colors = ['blue', 'red', 'green'];

console.log(colors);
console.log(colors[0]);

let lista = ['algo', 30, 'blabla', true];

// Array dentro de array
let nomes = ['nwldo', 'pedro', 'silvia'];

let lista1 = ['blabla', nomes];

let lista2 = ['blabla', ['xx', 'yy']];

console.log(lista2[1][0])

let segundo = lista2[1];
console.log(segundo[0]); // 'xx'


// Operações básicas de array
let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal',
];

// Dessa forma vai acrescentar um elemento, mas a posição 5 vai ficar vazia
//ingredientes[6] = 'cebola';
// Para evitar isso use o push()

ingredientes.push('cebola'); // Adiciona elemento na última posição
console.log(ingredientes);

// ingredientes.pop() // Remove o último elemento do array
// ingredientes.shift() // Remove o primeiro elemento do array

console.log(`Total de ingredientes: ${ingredientes.length}`);


// O que são objetos?
/* Um objeto é uma coleção de propriedades, e uma propriedade é uma associação 
entre um nome (ou chave) e um valor

objeto {
    propriedade: valor
}
*/
let personagem = {
    nome: 'Nwldo',
    idade: 90,
    pais: 'Brasil',
}

console.log(personagem);
console.log(personagem.nome); // Acessar elemento

console.log(`${personagem} tem ${personagem.idade} anos.`);

// Objeto dentro de objeto
let personagens = {
    nome: 'Nwldo',
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}
 // Acessando elemento
console.log(personagens.caracteristicas.magia)
console.log(personagens.olhos[0]);


// Acessando e alterando objetos
personagens.nome = 'Pedro';
console.log(personagens.nome);

personagens.caracteristicas.forca += 5;
console.log(`Força: ${personagens.caracteristicas.forca }`);

// Como a propriedade "olhos" é um arry pode chamar o push
personagens.olhos.push('verde');
console.log(personagens.olhos);

// Objeto dentro de um array
let personagens1 = {
    nome: 'Nwldo',
    idade: 90,
    pais: 'Brasil',
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagens1.carros[1].modelo);

// Função dentro de objeto
/*
Para criar função o nome vem primeiro e depois function
Como a função foi criada dentro do objeto ela tem acesso aos elementos
através da palavra chave this --> se refere ao própri objeto
*/
let pessoa = {
    nome: 'Nwldo',
    sobrenome: 'Oliveira',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());

// Usando arrow function --> como ela é anônima (não tem pai) não vai ter acesso aos elementos (this)
