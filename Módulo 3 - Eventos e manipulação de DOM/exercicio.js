//Exercicio
/*
Primeiro: quais os itens que vão ser manipulados?
ul ---> adicionar coisas dentro dele
e o input -- adicionar um evento
*/
//Elementos
const input = document.querySelector('.input');
const lista = document.querySelector('.ul');

//Funções
function handleKeyUp(e){
    if(e.key == 'Enter'){
        //console.log(input.value); //pegando algo do input
        //lista.innerHTML += '<li>' + input.value + '</li>';

        //adicionar elemento li na lista
        const nwLi = document.createElement('li');
        nwLi.innerHTML = input.value;
        lista.appendChild(nwLi);
        //Limpar o campo input
        input.value = '';
    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp);