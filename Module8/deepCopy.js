let firstPerson ={
     name : 'Anurag',
     age : 20,

     adress : {
          city : 'kotwar',
          state :  'uttarakhand'
     }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))

secondPerson.adress.state= 'uttarpradesh'

console.log(firstPerson)
console.log(secondPerson)