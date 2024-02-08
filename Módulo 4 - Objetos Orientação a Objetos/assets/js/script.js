//modelo de uma pessoa
//classe --> primeira letra maiuscula
/*
as classe tem propriedades e métodos --> para criar as propriedades dessa pessoa
precisa-se inicializar esse objeto pelo construtor
*/
// classe
class Person{
    // This ---> (isso) algo que está perto -- refere-se a própria pessoa
    constructor(name, age){// é um função que vai ser sempre executada quando criar uma pessoa nova
        this.nome = name;
        this.age = age;
    }
}

// para criar uma pessoa precisa-se instância a classe (ou seja, usa-se um template para criando um objeto)
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

    takeAstep(){// métodos
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



//================ #6: Classes: Getter e Setter ============================
//getter e setter funções que mostra o modifica o valor respectivamente

class Car{
    _age = 10;
    doors = 0;

    constructor(firstMarca, lastMarca){
        this.firstMarca = firstMarca;
        this.lastMarca = lastMarca;
    }

    takeDoors(){
        this.doors++;
    }

    get fullName(){
        return `${this.firstMarca} ${this.lastMarca}`;
    }

    get age(){
        return this._age;
    }

    set age(x){
        if (typeof x == 'number'){
            this._age = x;
        }
    }
}

let car1 = new Car("Fiat", "Uno");

car1.age = 20;

//console.log(`${car1.firstMarca} ${car1.lastMarca} tem ${car1.age} anos`);// está executando a função
console.log(`${car1.fullName} tem ${car1.age} anos`);


//============== #7: Classes: Herança =======================
class Person3{
    age = 0;

    constructor(name){
        this.name = name;
    }
}

class Student extends Person3{// herada as carecteristica classe abstrata (nome e idade)
    constructor(name, id){ //construtor para inicializar os atributos da classe
        super(name); //usa-se como função porque estou acessando o construtor da classe pai
        this.id = id;//o this se refere a própria classe
    }
}

let ps = new Student("Nwldo", 1);

console.log(`${ps.name} tem ${ps.age} anos e matrícula ${ps.id}`);
