// promises...

// i will bring groceries tomorrow 

// 1. pending state
// 2. fullfilled--> i bought groceries
// 3. Rejected state --> i did not bring gorceries 
// 4. setteled .(promises finshis) 


// HOW TO PRODUCE A PROMISE

let myPromise =new Promise(function(resolve,  reject)
{
     const a = 4;
     const b = 4;

     setTimeout(() => {
          if (a===b)
          {
               resolve("The value are equal")
          }
          else
          {
               reject('The values are not equal')
          }
     }, 2000);

})

// pending state.
// console.log(myPromise)

// fulfilled 
myPromise.then(function(result){
     console.log(result)
})

// Rejected state

myPromise.catch(function(failedResult){
     console.log(failedResult)
})