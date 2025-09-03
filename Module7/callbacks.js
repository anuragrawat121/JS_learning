

const fs = require( 'fs' )

console.log('First line');

// let data = fs.readFileSync('f1.txt')    
   
// console.log('File 1 data' + data);

fs.readFile('f1.txt',  cb1)   

function cb1(err,  data){
     if(err){
          console.log(err)
     }
     console.log('file 1 data->' + data)
     
     function cb2(err,  data2)
     {
}

          if(err){
               console.log(err)
          }
          console.log('file 2 data->' + data)
          
     function cb3(err,  data){
}
     if(err){
          console.log(err)
     }
     console.log('file 3 data->' + data)
     
}

console.log('Last line');