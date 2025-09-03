// for loop

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     console.log(` ${i} is best number`);
//   }
// }

//printing pyramid
for (let i = 1; i <= 5; i++) {
  let str = "";
  let str2 = "";    
  for (let j = 1; j < i + 1; j++) {
    str += "* ";
  }
  console.log(str);
}

// while loop
let i = 1;
while (i <= 5) {
  let str = "";
  for (let j = 1; j < i + 1; j++) {
    str += "* ";
  }
  console.log(str);
  i++;
}
// do while loop              
let j = 1;
do {
  let str = "";
  for (let k = 1; k < j + 1; k++) {
    str += "* ";
  }
  console.log(str);
  j++;
}while (j <= 5);