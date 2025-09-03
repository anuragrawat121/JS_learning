// The desturcturing assignment syntax is JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

 let arr = ['Hi' ,'I', 'am','Anurag'];

// let a = arr[1];
// let b = arr[3];

// console.log(a);
// console.log(b);

// not doing this..
let = [a, b, c, d] = arr 
console.log(a);


//HOW YOU CAN DESTRUCTURING A OBJECT..
let myObject = {
    name : 'Anurag', 
    age : 20 ,
    gender : 'M',
    
    address : {
        country : 'india',
        city : 'lansdowne'

    }
}

let{name : n, age : ag, gender ,address :{country, city}} = myObject; //you can not destruct a object without the actual  key name. but you can give first alternate name

console.log(n);
console.log(ag);
console.log(gender);


// nested object example-->
console.log(country);
console.log(city);



