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


