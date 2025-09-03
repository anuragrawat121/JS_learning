// WHAT ARE ARRAY ?
//Similer to a variable an array also stores data but it can store multiple data items

// REPRESENTING AN ARRAY
// array starts from index 0 by default and it goes upto the last element

// Array provides you a ordered collection of data
var arr = [12, "Ferrari", true, 12.4];
console.log(arr);

// var a = arr[1];
// console.log(a);

// // Reoplace your array elements
// arr[1] = "bentley";
// console.log(arr);

// console.log("The length of the array is", arr.length);

// //inbuilt JS array methods
// var arr2 = [12, 13, 14, 15, 16];

// push method
// arr2.push(100);
// console.log("pushed array", arr2);

// // shift method
// arr2.shift();
// console.log("shifed array", arr2);

// //unshift method
// arr2.unshift(102);
// console.log("unshifted array", arr2);

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(1, 3));// it will not change the original array
console.log(arr3.splice(1, 4));// it will change the original array
 const newArr = [...arr3]
 console.log(newArr);

 Array.from("Anurag").forEach((char) => { // this will convert the string to an array of characters
 console.log(char); // this will print each character of the string
 });

//  array to Object convertion 
  const obj = Object.assign({}, arr3); // this will convert the array to an object
 



// OBJECTS..
// in javascript an Object is an unordered collection of key value pairs. each key value pair is called a property.
// Ex: "key:value"
// The key of a property can be a string And the value of property can be any value.

//initializing with singleton notation
// var person = new Object();
// object.create({});

//Initializing an Object with object literal notation

// Every other object  in javaScript describes a different entity with its properties
var person = {
     firstName1 : "Anurag",
    secondName1 : "Rawat",
           age1 : false,
        ownCar : false
}
// console.log(Person);

// dot notation
// console.log(person.age1);

// Bracket notation
console.log(person["firstName"]);

//

const ageSym = Symbol("age"); // symbol is a primitive data type in javascript, it is used to create unique identifiers

var cap = {
  firstName: "Steave",
  lastName: "Rogers",
  ageSym : ageSym, // symbol is a primitive data type in javascript, it is used to create unique identifiers

  isAvenger: true,

  friends: ["bucky", "Tony stark", "hulk"],

  address: {
    state: "New york",
    city: {
      name: "brooklyn",
      pincode: 123456,
    },
  },
  greet: function () {
    console.log(`Hello, I am ${this.firstName} ${this.lastName} from ${this.address.city.name}`);
  },
};

console.log(cap.friends[1]);
console.log(cap.address.city.name);
cap.isAvenger = false;
Object.freeze(cap); // this will make the object immutable, you cannot change the properties of the object

console.log(cap.greet()) ; //
cap.movies = ["age of ultron", "civil war", "first avenger"];

// console.log(cap);

// delete cap.age;

// console.log(cap);

// console.log(cap.greet());

Object.seal(cap); // this will make the object mutable, you can change the properties of the object but you cannot add or delete properties
console.log(cap);
cap.hasOwnProperty("firstName"); // this will check if the object has the property or not
console.log(cap.hasOwnProperty("firstName")); // this will check if the object has the property or not


// console.log(Object.keys(cap));
// console.log(Object.values(cap));
// console.log(Object.entries(cap));

// const course ={
//   name: "JavaScript",
//   duration: "3 months",
//   topics: ["variables", "functions", "objects", "arrays"],
//   isAvailable: true,
//   details: function() {
//     return `${this.name} lasts for ${this.duration}. Topics include ${this.topics.join(", ")}.`;
//   }
// }

// const {name : fullName} = course; // destructuring assignment, it will extract the value of name property and assign it to fullName variable
// console.log(fullName); // JavaScript        E
// {
//   name : "Anurag",
//   course : "BCA",
//   age : 20,   
  
// }