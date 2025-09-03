// in HOISTING you can call a function before the declaration 
// but you can not call the function expression before the declaration of that.


console.log(a);
greet();

var a = "hi";


function greet()
{
console.log("Hello from me");
}
