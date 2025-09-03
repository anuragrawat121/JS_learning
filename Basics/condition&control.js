// var myScore = 92;

//  if(myScore > 95){
//     console.log('yeyy got my phone')

//  }
//  else{
//     console.log('better luck next time')
//  };

// QUETION---> STUDENT SCORE
// 90 TO 100 - A
// 70 TO 89 - B
// 50 TO 59 - C 
// lower than 50 - F
var studentScore = 89;

if(studentScore > 90 ){
    console.log("Student earned the A grade")
}
// wrong way.......
 
// else{
//     if(studentScore > 70){
//         console.log("student earned the B grade")
//     }
//     else{
//         if(studentScore > 50){
//             console.log("Student earned the C grade")
//         }
//         else{
//             console.log("Student earned the F grade")
//         }
//     }
// }
 
// RIGHT WAY...

else if(studentScore >= 70 && studentScore <= 89)
{
    console.log("student earned the B grade")
}
else if(studentScore >= 50  && studentScore <= 69 )
{
    console.log("student earned the C grade")
}
else
{
    console.log("student earned the D grade")
}