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




