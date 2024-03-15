/*
o que é Sincrono e Assincrono?

o código síncrono é lido e executado da primeira até a última linha, em ordem. 
O código assíncrono, por sua vez, não necessariamente respeitará a ordem das linhas 
do código, podendo ter funções sendo lidas e executadas simultaneamente ou aleatoriamente.

Request = Requisição
-> Cabeçahos / Headers
-> Corpo / Bady

Response = Reposta
-> Cabeçahos / Headers
-> Corpo / Bady
*/
let nome = "nwldo";
let sobrenome = "oliveira"
let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

/**
 Como uma API funcina?
 API = Application Programming Interface

 Padrão json (Javascript Object Notation) para comunição

 https://jsonplaceholder.typicode.com/
 https://jsonplaceholder.typicode.com/posts
 */