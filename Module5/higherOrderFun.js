

// let arr = [1, 2, 3, 4, 5];

// for( let square of arr)
// {
//     square = square*square;
//     console.log(square);
// }
 

//MAP......

// const Num =[1, 2, 3, 4, 5];

// const squaredNum = Num.map(function(n){
//     return n*n;
// })

// console.log(squaredNum);

//converting the 

// const transection =[1000, 3000, 4000, 2000, -390, 49900];

// const intoDolller = transection.map(function(ammount){

// return (ammount/800).toFixed(0) + '$';

// })

// console.log(intoDolller);

// foreach fun.

// const intoDolller = transection.forEach((ammount)=>{
// console.log((ammount/800).toFixed(0) + '$');

// })

// console.log(intoDolller);

// // 

// Find returns the first element of an array that satisfy the condition 

// const transection =[-1000, -3000, 4000, -2000, -390, -49900];

// let firstWithdrawl = transection.find((n)=>{
//     return n<0
// })

// console.log(firstWithdrawl);








// // findIndex

// let firstWithdrawlIndex = transection.findIndex((n)=>
// {
//     return n<0;
// })

// console.log("index " + firstWithdrawlIndex)








// SOME METHOD
// SOME: condition check to get a true or false based on a condition 
// it will return true if even 1 element stisfies the condition.

// let result  = transection.some((n)=>{

//     return n>0;
// }) 
// console.log(result);


// // EVERY METHOD 
// // to get true or false based on a condition 
// // until the all element stisfies the condition 

// let resultEvery = transection.every((n)=>{

//     return n>0;
// }) 
// console.log(resultEvery);






// FILTER METHOD 
// Filter Returns a new array it will return all those elements that matches the specific condition 
// if the condition is true it will return the element for the condition and if it is false it will discard that element 
//QUE --> YOU HAVE TO CHECK FOR EVEN NUMBER IN A ARRAY AND PUT THEM IN SEPARATE ARRAY..

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let evenArr =[]

// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]%2==0){
        
//         evenArr.push(arr[i]);
        
//     }
// }

// console.log(evenArr);


// filter

//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  let evenNum = arr.filter((n)=>{
//     return  n%2==0;
//  })
  
//  console.log(evenNum);


// const transection = [1000, -3000, -4000, 2000, -390, 49900];

// let depositedAmmount = transection.filter((ammount)=>{
//     return ammount>0;
// })

// console.log(depositedAmmount);   




// REDUCE METHOD
// REDUCE GIVE A SINGLE RESULT..
// you need sum of every element in a array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sumOfElemnts = 0; //accumulator value

// for(i=0; i<arr.length; i++){

//    sumOfElemnts = sumOfElemnts + arr[i];

// }

// console.log(sumOfElemnts);

// let result = arr.reduce((acc, value)=>{
//      let  updatedSum = acc + value;
//     return updatedSum;
// }, 0 )

// console.log(result);

let result = arr.reduce((acc, value)=>{
     let  Product = acc*value;
    return Product;
}, 1)

console.log(result);





