// EVERY OBJECT IN JAVASCRIPT HAS A BUILT-IN PROPERTY, WHICH IS CALLED ITS PROTOTYPE IS ITSELF AN OBJECT SO THE PROTOTYPE WILL 
// HAVE ITS OWN PROTOTYPE .






// Object---> object prototype pre-built ---> pre-built methods and properties


// Prototype Chaining


// Constructor Person ---> person prototype----> object prototype pre-built------>null container----> ERROR //if it is not find any pre
                                                                                                    // built methods and properties


let myObj = {


}
// console.log(myObj)S

let person1 = {
    name : 'Anurag',
    age : 20
}

// console.log(person1)

// console.log(person1.hasOwnProperty('name')) // inbuilt methon.. \



// constructor function 

// function person(_name , _age)  {
//  this.name = _name
//  this.age = _age

//  this.greet = function() {
//     console.log(`Hello ${this.name}`)
//   }
// }

// let person2 = new person('Anurag', 18)
// // let person3 = new person('sahil', 18)

//   console.log(person2.greet())
// // console.log(person3)



function Person(_name , _age)  {
    this.name = _name
    this.age = _age

    
}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}    

let person2 = new Person('Anurag', 45);
let person3 = new Person('Shail', 39);


console.log(person3);
console.log(person2);
console.log(person3.getNameAndAge())