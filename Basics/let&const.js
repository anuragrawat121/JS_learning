var a = 20;

var a = 30;

// // solution of redeclaration problem.
let b = 45;

b = 40; 

// // let b = 33;

console.log(a);

console.log(b);

if(false){
 let c = 40;
    console.log(c);
}

// variable declared with let keyword are blocked scoped


// const keyword

 const d  = 100;

 console.log(d);

//  you can not reasigned the d constant variable.


//  REDECLARATION                           REASSIGNMENT                               SCOPING 

//  VAR --> YES                             YES                                       FUNCTION.
//  LET --> NO                              YES                                        BLOCK.
//  CONST --> NO                            NO                                         BLOCK.