//modelo de uma pessoa
//classe primeira letra maiuscula
/*
as classe tem pripriedades e métodos --> para criar as propriedades dessa pessoa
precisa-se inicializar esse objeto -- construtor
*/
// classe
class Person{
    // This ---> (isso) algo que está perto -- refere-se a própria pessoa
    constructor(name, age){// é um função que vai ser sempre executada quando criar uma pessoa nova
        this.nome = name;
        this.age = age;
    }
}

// para criar uma pessoa precisa-se instância a classe (ou seja, está pegando o tamplete e criando um objeto)
let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40); // com um template foi criando três pessoas

console.log(p1.nome);

//É possível ter um propriedade sem ser inicializado pelo construtor
class Person1{
    age = 0; // será aplicada para toda pessoa que for criada

    constructor(name){
        this.name = name;
    }
}

let p4 = new Person1("Antonio");
let p5 = new Person1("Zé da manga");
let p6 = new Person1("Júlio");

// mudando a propriedade
p4.age = 20;

console.log(`P4 = ${p4.name} tem ${p4.age} anos`);
console.log(`P5 = ${p5.name} tem ${p5.age} anos`);
console.log(`P6 = ${p6.name} tem ${p6.age} anos`);


// =============== #5: Classes: Action (ações) ====================
class Person2{
    age = 0;
    steps = 0;

    constructor(name){
        this.name = name;
    }

    takeAstep(){
        // para fazer a distinção de pessoas usa-se o this
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log('Idade não aceita. (só número)');
        }
    }
}

let p7 = new Person2("João");
let p8 = new Person2("Maria");
let p9 = new Person2("Pedro");

//p7.takeAstep();

p8.setAge('sdfdf');

console.log(`Passos de ${p7.name}: ${p7.steps}`);
console.log(`${p8.name} tem ${p8.age} anos.`);
