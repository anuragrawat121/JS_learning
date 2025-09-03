// with the help of class you can also create multiple objects..


class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`welcome ${this.name}`)
    }
}


let Person1 = new Person('Adam', 19);  

console.log(Person1);

Person1.welcome();