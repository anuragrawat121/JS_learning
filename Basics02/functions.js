// what are funcion?
// a funtion is a block of code that performs a specific task
// in JavaScript is execute when "something" invokes.
// Function are one of the fundamental building blocks in JavaScript.

// A funciton in JavaScript is similar to a procedure -a set of statements that
// performs a task or calculates a value, but for a procedure to qualify as a funtion
// it should take some input  and return an output where there is some obvious relationship between the input and the output
// to us ea function, you must define it somewhere in the scope

// DECLARE AND INVOKING A FUNTION
// SYNTAX

// function demo(){
// code
// }
// this is how you declare a function.
// demo() // invoking the function.

// PARAMETERS AND ARGUMENTS
// a function can be defined with a set of parameters that it will take
//  parameters are generally the values that we want the function to accept
// Arguments are the values that we pass for those parameters

// example
function add(a, b) {
  console.log(a + b); // function definition / declaration
}
add(2, 4); //passing the arguments

function greet() {
  console.log("Hello");
}
greet();

// function expression

var a = 4 + 6;

console.log(a);

var add = function (a, b) {
  // anonymous function
  console.log(a + b);
  return a + b;
};
var result = add(9, 6);
console.log(result);

//  function loginUserMessage(username){
//   return username + " logged in successfully.";
// }

// console.log(loginUserMessage("Anurag"));

function calculateCartPrice( val1, val2, ...num1) //rest operator 
 {
    return num1;
}

// console.log(calculateCartPrice(100, 200, 300)); // 100

const user = {
    username: "Anurag",
    prices : 100
};

function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.prices}`);
}

// handleObject(user);

handleObject({
    username: "Anurag",
    prices: 100
});

const myNewArray = [1, 2, 3, 4, 5];

function handleArray(getArray) {
    return getArray[1];
}

console.log(handleArray(myNewArray)); // 2