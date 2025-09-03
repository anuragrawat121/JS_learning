function greet(){
     let name = 'steve'

     function displayName(){
          console.log('Hi '+ name )
          
          let age = 25
          
          function displayAge(){
               console.log('my age is '+ age)
          }
          return displayAge
     }
     return displayName
}

let g1 = greet();

let g2 = g1();

g2()