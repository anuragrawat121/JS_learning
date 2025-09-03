// iife stands for Immediately Invoked Function Expression
// IIFE with a named function expression                              
(function namedIffe(str) {
  console.log(`This is a named IIFE: ${str}`);
})("Hello I am IIFE"); // This IIFE will execute immediately after its definition


((a, b) => { // unnamed IIFE with parameters
  console.log(`This is an IIFE with parameters: a = ${a}, b = ${b}`);
})(5, 10); // This IIFE will execute immediately with the provided arguments
