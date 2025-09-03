// Problems with var keyword.

var a = 21;

var a = 32; //Redeclaration of the variable.

console.log(a);

if(a==32){
    var b = 40;
    console.log(b);
}

// Scoping issue var keyword are not blocked scoped they are funtion scoped

console.log(b);

function test()
{
    var c = 100;
    console.log(c)
}
test()

console.log(c)