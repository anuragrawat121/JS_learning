let arr = [
    {name: 'Anurag', age: 20, gender:'M'},
    {name: 'Himanshu', age: 20, gender:'M'},
    {name: 'Ayush', age: 20, gender:'M'},
    {name: 'Riya', age: 20, gender:'F'},
    {name: 'Kajal', age: 20, gender:'F'},
    {name: 'lalit', age: 20, gender:'M'},
    {name: 'Harry', age: 20, gender:'F'}
]


// Findout the age of all the men(males)

let males = arr.filter((obj)=>{
    return obj.gender=='M';
}).map((male)=>{
    return male.age;
})

console.log(males);


// From the transections Array filter out prositive Elements and calculate the total ammount 
// use filter and reduce for this quetion 

let transection = [4000, 609990, -345345, 958475, -58739, 897457, -84535];

let totalDepositeAmmount = transection.filter((depositeAmmount)=>{
    return depositeAmmount > 0;   
}).reduce((acc, totalDeposite)=>{
    return totalDeposite= (acc + totalDeposite)/2;
} , 0)

console.log(totalDepositeAmmount +'$');




