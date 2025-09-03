// for of loop
const arr = [1, 2, 3, 4, 5];
let greet = "Hello world";
let map = new Map();
map.set("name", "John");
map.set("age", 30);
const obj = {
  name: "Alice",
  age: 25,
};

// for of loop in arrays, strings, maps, and objects
// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }
// for (const num of arr) {
//   console.log(num);
// }

// for (const char of greet) {
//   console.log(char);
// }
// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }


// for in loop in arrays, strings, maps, and objects
// for (const key in arr) {
//   console.log([key, arr[key]]); //destructuring the key and value
//   console.log(`${arr[key]}`); // using template literals
//   console.log("Key:", key, "Value:", arr[key]); // using string concatenation
// }         


// for (const key in greet) {
//      console.log(`Key: ${key}, Value: ${greet[key]}`); // using template literals
//      console.log("Key:", key, "Value:", greet[key]); // using string concatenation
//      console.log([key, greet[key]]); // destructuring the key and value
// }

// for (const key in map) {
//      console.log(`Key: ${key}, Value: ${map[key]}`); // using template literals
//      console.log("Key:", key, "Value:", map[key]); // using string concatenation
//      console.log([key, map[key]]); // destructuring the key and value
// }

for (const key in obj) {
     // console.log(`Key: ${key}, Value: ${obj[key]}`); // using template literals
     // console.log("Key:", key, "Value:", obj[key]); // using string concatenation
     console.log(typeof(obj[key])); // destructuring the key and value
}

