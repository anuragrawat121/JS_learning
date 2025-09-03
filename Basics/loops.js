// loops are some control statements that we can use to contol a flow of the program and to do some repeatative


// var a = "Hello world"

// // for loop--->
// for(var i=0; i<=10; i++)
// {
//     console.log(a)
// }   
// you have an Array and you have to square each element of that array

// var num = [2, 4, 6, 8, 10]

// var squaredArray =[] //empty array 

// for(var i=0; i<=num.length; i++)
// squaredArray.push(num[i]*num[i])
// {
//     console.log(squaredArray)
// }








// Do while loop evaluate the condition inside the parameter(.0.
// if the condition evalutes the true the code inside the while loop is executed.
// the condition is evalute again.
// this process continues until the condition is false.
// when the condition evaluates to false, the loop stops.

// syntax
//while(condtion){
    //code goes here 
// }

//we haave to print 1 to 10 
// var i = 1;
// var n = 10;

// while(i<=n){
//     console.log(i)
//     i++
// }

// var i = 11
// var n = 10
// do{
//     console.log(i)
//     i++
// }
// while(i<=n){
//      console.log(i)
//          i++
    
// }




// In JavaScript the for-in loop allows you to loop through the properties of an objrect.
// The statements of code found withinn found within the loop body will be executed once for each property of the object.

var colors = {
    primary : "Blue",
    secondary : "Red",
    tertiary : "white"
}

    for(var color in colors){
        console.log( color + ' -> '+ colors.color)
    }

// var colors = ["Yellow", "Green", "Red", "white", "pink"] 

// for(var color in colors){
//     console.log( color + "->" + colors[color])
// }





// The for of statement creates a loops iterating over iterable objects
// including: built-in string, Array, array-like NodeList and also map and set 
var scores = [90, 89, 70, 56, 80]   

// // syntax
for(var sqaure of scores){
    sqaure = sqaure*sqaure
    console.log(sqaure)}


// method 
// let colors = ["Red", "white", "Green"]

// for(var[index , color] of colors.entries()){
//     console.log(index + '->'+ color)
// }

// var str = "scaler"

// for(var c of str){ 
//     console.log(c)
// }

