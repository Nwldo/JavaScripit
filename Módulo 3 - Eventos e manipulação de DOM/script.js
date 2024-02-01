function clicou() {
    console.log("Clicou no botão");
}

// Colocar o avento no javaScript
let botao = document.querySelector('.botao');
// adicionar um escutador de eventos
//botao.addEventListener("click", clicou);
botao.addEventListener("click", () => {
    clicou();
});


// #5: Manipulando elementos 1

function clicar() {
    const lista =  document.querySelector('#lista');
    //console.log(lista);
    // Ver o que tem dentro do elemento
    console.log(lista.children);
    console.log(lista.children[0].children)
    const ul = lista.querySelector('ul');
    console.log(ul);

    // Consultar o valor
    console.log(ul.innerHTML);

    // Alterando valor
    //ul.innerHTML = "<li>Item alterado</li>";
    ul.children[0].innerHTML = "Item alterado!"; // pode ser adicionado códigos html entre aspas

    //ul.children[0].innerText = "Item alterado!"; // o conteúdo será uma string

    // Adicionando
    ul.innerHTML += "<li>Item alterado</li>";

    // Alterando o conteúdo interno e o elemento
    console.log(ul.outerHTML);

    ul.outerHTML = "<strong>Alterado!</strong>"

}

/* Modificar elementos 2
 Adicionar elementos usa-se o 


*/

function modificar() {
    const lista1 = document.querySelector('#lista1');
    const ul = lista1.querySelector('ul');

    //ul.children[0].innerHTML += "(alterado)";
    //ul.children[0].append("(alterado)");

    let newLi = document.createElement('li');
    newLi.innerText = "Intem adicionado";

    ul.appendChild(newLi);

}

/**
A diferença do innerHTML para o append é no processamento, pois o primeiro remove tudo do memório e
adicionar novamente o valor anterior mais conteúdo novo, já o segundo só adiciona o conteúdo novo.

Obs.: só funciona para textos. --- para adicionar um elemento usa-se appendChild (adiciona no final)
mas antes tem que criar o elemento na memória

o prepend(nwLi) adicionar no inicio

 */

//Manipulando elementos 3 - adicionando elementos antes e depois
// AFTER --> depois
// BEFORE --> ANTES

function adicionar() {
    const lista3 = document.querySelector('#lista3');
    const ul = lista3.querySelector('ul');

    //ul.after("Texto depois.....");
    //ul.before("Texto antes..");

    /*
    const newButton = document.createElement('button');
    newButton.innerHTML = "Botão";

    ul.before(newButton);
    */

    // Adicionar uma nova lista
    newUl = document.querySelector('ul');
    //ul.after(newUl); pode ficar antes

    // adicionar dentro dele
    //newLi = document.querySelector('li');
    //newUl.append(newLi);
    //com o loop
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " + i;
        newUl.append(newLi);
    }

    ul.after(newUl);
}

// para adicionar um elementos em vez de texto
// cria elemento ou pegar o elemento do outro lugar

//Manipulando atributos

function cliqueaqui() {
    const input = document.querySelector('input');

    //mostrar atributo
    console.log(input.getAttribute('type'));

    //verificar se existe atributo
    if(input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM');
    }else{
        console.log('Não tem placeholder...');
    }

    //Adicionar atributo e se tiver vai alterar o atributo
    /**
     Define o valor de um atributo no elemento especificado. Se o atributo já existir, o valor será 
     atualizado; caso contrário, um novo atributo será adicionado com o nome e valor especificados.
      
     */
    input.setAttribute('placeholder', 'Placeholder alterado');
}

function mostrarsenha() {
    //Obs como document tem mais de um input deve-se especificar pelo ID ou class
    const psw = document.querySelector('.senha');
    const botao = document.querySelector('.bnt_botao')
    //console.log(psw.getAttribute('type'));
    
    if (psw.getAttribute('type') === 'text') {
        psw.setAttribute('type', 'password');
        botao.innerText = "Mostrar senha";
    }else {
        psw.setAttribute('type', 'text');
        botao.innerText= "Ocultar senha";
    }
   
    
}

// Manipulando o CSS
function fazacao (){
    const li = document.querySelector('.Li');

    //quando a propriedade do css tem traço a partir do segunda palavra fica em caixa alta
    li.style.backgroundColor = '#00f';
    //Se não existir no html, é adicionada
    li.style.fontSize = '20px';
}

// Trabalhando com Classes
function classes() {
    const botao6 = document.querySelector('.botao6');

    //console.log(botao6);
    //console.log(botao6.classList);

    //botao6.classList.add('verde');
    //botao6.classList.remove('verde');

    /* 
    if(botao6.classList.contains('azul')){
        botao6.classList.remove('azul');
        botao6.classList.add9('verde');
    }else{
        botao6.classList.add('azul');
        botao6.classList.remove('verde');
    }*/

    //resumido o codigo acima
    botao6.classList.toggle('azul');

    if(botao6.classList.contains('azul')){
        botao6.classList.replace('azul', 'verde');
    }else{
        otao6.classList.replace('verde', 'azul');
    }

}

//Eventos de teclado 1
function apertou(){
    
    //console.log("APERTOU!");
}

function segurou(){
    console.log("SEGUROU!");
}

function soltou(evento){
    //console.log("SOLTOU!");
    //console.log(evento.key);
    console.log(evento.code);
    //shift apertado
    console.log('TECLA APERTADA: ' + evento.code);
    console.log('SHIFT ' + evento.shiftkey);
    console.log('SHIFT ' + evento.ctrlkey);
    console.log('SHIFT ' + evento.altkey);
    console.log('---')
}

//document.addEventListener('keyup', soltou);

//Eventos de teclado 2 - saber qual tecla foi apertada
const input = document.querySelector('.input_tecla');
input.addEventListener('keyup', soltou);

//Exercicio
function exercio(){
    const addLista = document.querySelector('.lista6');
    console.log(addLista);
}


