let  a = {
     car : 'BMW',
     modal : 2000
}

if(a){
     console.log("I am truthy");
}
else{
     console.log("I am falsy");
}

// ONLY THESE VlUES ARE THE FALSY VALUES

// false
// 0 (zero)
// -0(minus zero)
// 0n (BigInt zero)
// '' , "", ``(empty strings)
// null
// undefined
// NaN

(function () {

     if ((-100 && 100 && "0") || [] == true || 0) {
     
     console.log(1); //#
     
     if ([] || (0 && false)) {
     
     console.log(2); //#
     
     }
     
     if (Infinity && Nall && "false") {
     
     console.log(3);
     
     if ("") {
     
     console.log(4);
     
     }
     
     } else {
     
     console.log(5); //#
     
     if (({} || false ==="" && !(null && undefined)) {
     
     console.log(6); //#
     
     }
     }
     
     })();