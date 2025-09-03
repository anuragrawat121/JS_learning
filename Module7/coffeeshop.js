function placeOrder(drink){
     return new Promise(function(resolve, reject){
          if(drink==='coffee'){
               resolve('Order for Coffee recieved')
          }
          else{
               reject('Other orders Rejected')
          }
     })
}

function processeOrder(order){
     return new Promise(function(resolve){
          console.log('Order is being processed')
          resolve(`${order} and is served`)

     })
} 

// placeOrder('coffee').then(function(orderPlaced){
//      console.log(orderPlaced)
//      let orderIsProcessed = processOrder(orderPlaced)
//      return orderIsProcessed
// }).then(function(processeOrder){
//      console.log(processeOrder)
// }).catch(function(error){
//      console.log('drink not available')
// })
// chaining of promise
// solution with promises..



// Async Await --keywords

async function serveOrder(){
     try{

           let orderPlaced = await placeOrder('soup')
          console.log(orderPlaced)
          let processedOrder = await processeOrder(orderPlaced)
          console.log(processedOrder)
     }
     catch(error){
          console.log(error)

     }
}
serveOrder()