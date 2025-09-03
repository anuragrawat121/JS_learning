const user = {
  username: "Anurag",
  prices: 100,
  welcomeMessage: function () {
    console.log(`Welcome ${this.username}, your price is ${this.prices}`);
    console.log(this); // 'this' refers to the current object
    // 'this' is used to access properties of the current object
  },
};

user.welcomeMessage(); // calling the method of the object
// console.log(this);

function chai() {
  let username = "Anurag";
  console.log(this.username); // 'this' refers to the global object in non-strict mode, or undefined in strict mode
  console.log(this); // 'this' refers to the global object in non-strict mode, or undefined in strict mode
}
chai(); // 'this' refers to the global object in non-strict mode, or undefined in strict mode

let a = 2;

let test1 = () => {
  // syntax of arrow function.
  console.log(1);
};

let test2 = (a) => {
  console.log(a + 2);
};


const test4 = (a, b) => a + b;
console.log(test4(2, 3));

 // assigning the function to 'this' object
// test1();

// test2(4);

// test3(3, 4);

let test3 = (  b) => ({username: "Anurag",  a , b}); // arrow function returning an object
console.log(test3(3, 4)); // calling the arrow function
