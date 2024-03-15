// O que é um função --> é um bloco de código que executa alguma operação

// criando função
// Declarando função
function gravidade() {
    console.log('A gravidade do planeta é:');
    console.log(9.8)
}

// ======== como usar a função ================
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


// ========= Retorno da função ===================
// Funções podem ter retorno - pra armazenar o returno cria-se variável
function uf(cidade, estado) {
    return `${cidade}/${estado}`;
}

let completo = uf("Teresina", "PI");
console.log(completo);

// ========= Função com retorno condicional ====================
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


// =========== Variáveis dentro de funções ================
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


/* ============ Funções dentro de funções =============
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


// ======== Introdução a Array ================
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


// ========== Operações básicas de array ===============
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


// ========== O que são objetos? =================
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


// =========== Acessando e alterando objetos ================
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

// ========== Função dentro de objeto ================
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




// ========= O loop for ==================
for(let n = 0; n < 10; n++){
    console.log('Frase qualquer' + n);
}

// ======= Dando loop em arrays ============
let cores = ['preto', 'branco', 'azul', 'vermelho'];

cores.push('verde');

for(let n = 0; n < cores.length; n++){
    console.log(cores[n]);
}

// Outra forma, mas executa da mesma forma pegando o indice do elemento
for(let i in cores) {
    console.log(cores[i]);
}

// Outra forma, mas agora pega o valor dos elementos do array
for(let cor of cores) {
    console.log(cor);
}


// Objeto dentro do array
let cores1 = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'verlho', qt: 15}
];
29
// Acessando a propriedade e valor
for(let cor of cores1) {
    console.log(cor.nome);
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

for(let i in cores1) {
    console.log(cores1[i].nome);
}

// Alterando valores
for(let i in cores1) {
    cores1[i].nome = cores1[i].nome.toUpperCase();
}


// ========== O loop while (enquanto) ================
let numero = 0;

while (numero < 10) {
    console.log(`O número da vez é ${numero}`);
    numero++;
}

/*
mesmo código
for(let numero = 0; numero < 10; n++){
    console.log(`O número da vez é ${numero}`);
}

em loop
while(true) {

}
*/

// ============= Funções de array =====================
let frutas = ['Maça', 'Uva', 'Laranja', 'Banana'];

frutas.push('Manga');

console.log(frutas);
console.log(frutas.length);

// Excluir o último elemento
frutas.pop();

// Excluir o primeiro elemento
frutas.shift();

// Separando os elementos por separador --> espaço, virgula...
console.log(frutas.join(' '));

// Alterando valores
frutas[0] = 'Pêra';

// Alterar o último itens sem saber o índice
frutas[frutas.length - 1] = 'Pêra';

console.log(frutas);


// =============== Ordenação de array =========================
frutas.sort();

frutas.reverse();

console.log(frutas);


let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020},
];

// Como ordenar de acordo com o ano?
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    }else if(a.year , b.year) {
        return -1;
    } else {
        return 0;
    }
});

console.log(cars);

// Outra forma
cars.sort((a, b) => {
    return a.year - b.year;
});

console.log(cars);

//outra forma
cars.sort((a, b) => a.year - b.year);


// ============= Iteração de array 1 =====================
/*
Elementos maiores que 4

let bigFrutas = frutas.filter((item) => {
    if(item.length > 4) {
        return true;
    } else {
        return false;
    }
});

Outra forma

let bigFrutas = frutas.filter((item) => item.length > 4)

*/
// outra forma
let bigFrutas = frutas.filter((item) => {
    return item.length > 4;
})

// Outra função --> só returna true quando todos satisfazer a condição
let ok = frutas.every((value) => {
    return value.length > 3;
});

if (ok) {
    console.log('Todos são maior que 3');
} else {
    console.log('Não são todos que 3');
}

// Já o "some" returna true se alguns satisfazerem a condição
let algum = frutas.some((value) => {
    return value.length > 3;
});

if (ok) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é todos que 3');
}


// Saber se um elemento existe no array
if(frutas.includes('Pêra')){
    console.log('Tem pêra sim!');
} else {
    console.log('Não tem pêra...')
}

