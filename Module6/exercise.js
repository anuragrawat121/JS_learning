// function Person(firstName, lastName){
//      this.firstName = firstName;
//      this.lastNamet = lastName;
     
// }

// const member = new Person('Lydia' ,'Hallie');
// Person.getFullName = function(){
//      return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());



function Person(firstName, lastName){
     this.firstName = firstName;
     this.lastNamet = lastName;
     
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('sarah', 'rawat');

console.log(lydia);
console.log(sarah);


const shape ={
     radius : 10,
     diameter()
     {
          return  this.radius * 2;
     },
     perimeter: ()=> 2 * Math.PI * shape.radius 
 };

     console.log(shape.diameter());
     console.log(shape.perimeter());
