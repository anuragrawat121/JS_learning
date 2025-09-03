// Javascript execution context
// there are two types of execution context in JavaScript: global and function.
let value1 = 10; // global execution context
// Global execution context is created when the script is loaded
let value2 = 20; // global execution context

function add(num1, num2) {
  // function execution context
  console.log("Function execution context");
  return num1 + num2;
}
add(value1, value2);
add(20, 30); 
