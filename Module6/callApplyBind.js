
let person1 = {
     firstName : 'Anurag', 
     lastName : 'Rawat',
     age : 102

        
    }

    
     let printDetails  = function(city, state){
        console.log(`Hi i am ${this.firstName} ${this.lastName} and i am ${this.age} years old and i am from ${city} ${state}`);
       }
  

    let person2 = {
     firstName : 'Sahil', 
     lastName : 'Rawat',
     age : 102
     
};

//Call method  
printDetails.call(person2,  'Lansdown' , 'Uttarakhand')

// Apply method
printDetails.apply(person2, ['Lansdown' , 'Uttarakhand'])

// build method 

let myFun = printDetails.bind(person2,  'Lansdown' , 'Uttarakhand')
console.log(myFun)

// person1.printDetails()
// person2.printDetails()
