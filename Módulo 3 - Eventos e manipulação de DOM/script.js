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


