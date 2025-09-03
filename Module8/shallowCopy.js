let firstPerson ={
     name : 'Anurag',
     age : 20,

     adress : {
          city : 'kotwar',
          state :  'uttarakhand'
     }
}

let secondPerson = {...firstPerson} 
 
secondPerson.name = 'Himanshu'


console.log(firstPerson)
console.log(secondPerson)