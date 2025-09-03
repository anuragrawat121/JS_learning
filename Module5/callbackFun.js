//  In JavaScript, a callback function that is passed into another function as an argument.
//  This function can then be invoked at a later stage of time  
// // Since, in JavaScript, function are objects, function can be passed as arguments.

// function printFirstname(firstname , cb){
//     console.log(firstname)
//     cb('Rogers')
// }

// function printLastname(lastname){
//     console.log(lastname)
    
// }

// printFirstname('steve' ,printLastname); // callback



// checks for the even number..

const isEven = (n)=>{
    return n%2==0
}

let printResult = (evenfn, num) =>{
    const isNumEven = evenfn(num)

    console.log(`The number ${num} is an Even Number ${isNumEven} ` )
}

printResult(isEven, 1)



let add = (a, b) =>{
      return a+b;
}

let sub = (a, b) =>{
      return a-b;
}

let result = (operation, a, b)=>
{
    return operation(a, b)
}

console.log(result(add, 5, 6 ));


let greeting = (name)=>{
    console.log("Hello" + name);
}

let message = (callback, n)=>{
     return callback(n)
}


console.log(message('Anurag'))







