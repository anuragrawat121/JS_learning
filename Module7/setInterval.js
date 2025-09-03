function hello(){
     console.log('Hello')
}
let timer = setTimeout(hello, 1000);

setTimeout(() => {
clearTimeout(timer)   
} , 3000);