// forEach higher order function
// we have to pass a callback function to the forEach method
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (num) {
  // this is a callback function
  console.log(num);
});

const obj = {
  name: "Alice",
  age: 25,
};

Object.entries(obj).forEach(function ([key, value]) {
  // first we have to convert the object to an array of key-value pairs
  console.log(`${key}: ${value}`); // using template literals
});

let greet = "hello world";
Array.from(greet).forEach((char) => {
  console.log(char);
});

greet.split("").forEach((char) => {
  console.log(char);
});

// names = ["Alice", "Bob", "Charlie"];
// names.forEach(printName);
// function printName(name) {
//   console.log(name);
// }

//  forEach parameter list
// names.forEach((element, index, array) => {
//   console.log(element); // element: current item
//   console.log(index); // index: current index
//   console.log(array); // array: the original array
// });

//[{}, {}, {}] -->
const names = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
names.forEach((object) =>
console.log(object["name"]));

