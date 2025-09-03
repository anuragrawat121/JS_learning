                                // non strict                                                  stict mode.

                        //  case1. console.log(this)  -> empmty obj{}             //  case1. console.log(this)  -> empmty obj{}                           
                   // case2. inside the function  -> refers to glbl obj        // case2. inside the function  -> undefined                                               
// Node.js     
                     // case3. obj->fun --->  object itself                      // case3. obj->fun --->  object itself
                        // case4. obj->fun->fun ------> global obj.                  // case4. obj->fun->fun ------> undefined.



                      //  case1. console.log(this)  -> window obj{}                 //  case1. console.log(this)  -> window obj{}
                     //   case2. inside the function  -> window obj{}                // case2. inside the function  -> undefined
 //browser
                      // case3. obj->fun ---> object itself                          // case3. obj->fun ---> object itself 
                    //  case4. obj->fun->fun ------> window obj {}                //  case4. obj->fun->fun ------> undefin








                    

'use strict'

// console.log(this);


// function displayThis(){
//     console.log(this);
// }

// displayThis();


// let myObj = {
//     name : 'Anurag', 
//     age : 34,

//     myfun: function(){
//         console.log(this.name);
//     }
// }
// myObj.myfun();


let myObj2 = {
  name : 'Anurag', 
  age : 34,

  myfun2: function(){
   function myfun3(){
      console.log(this);
    }
  myfun3();
  }
}
myObj2.myfun2();



