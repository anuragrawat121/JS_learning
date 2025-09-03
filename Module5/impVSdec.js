// given a number and we have to check that if the sqaure of that number is even or not.
// imperetive way
let number = 34;

let square = number*number;

let isEven;

if(square % 2==0){
    // console.log("The square of the number is even");
     isEven = true;
}
else{
    isEven = false;
    // console.log("Square of the number is not even");
}

// console.log(isEven);

// Declarative way 
let checkForSquare =(x) => (x*x%2 ===0 ? true : false)

console.log(checkForSquare(4));