let a = 10;
const b = 20;
var c = 30;

if (true) {
    let a = 100; // block scope, this variable is only accessible within this block
    const b = 200; // block scope, this variable is only accessible within this block
    var c = 300; // function scope, this variable is accessible outside the block
    console.log(a); // 100
    console.log(b); // 200
    console.log(c); // 300
}

