// Clssical Inheritance ----> Methods and properties from base class can be put down or can be passed
// into derived class..

 class Person {
    constructor(_name, _age){
            this.name = _name;
            this.age = _age;
    }
    welcome(){
        console.log(`Welcome ${this.name}`);
    }

 }


 class Teacher extends Person {

    constructor(_name, _age, _classStrength){
        super(_name, _age)
        this.classStrength = _classStrength;

    }

 }


 class Student extends Person{
    constructor(_name, _age, _CGPA){
        super(_name, _age)
        this.CGPA = _CGPA;

    }
    test(){
        super.welcome()
    }


 }


 
let Person1 = new Person('Adam', 19);  

console.log(Person1);

let Teacher1 = new  Teacher('Mark' , 40, 65);   

console.log(Teacher1);

let Student1 = new Student('Anurag', 20, 8);

console.log(Student1);

Student1.test();