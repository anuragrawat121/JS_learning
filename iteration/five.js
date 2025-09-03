const course = [
  { couseName: "JS", price: 200 },
  { couseName: "Python", price: 300 },
  { couseName: "Ruby", price: 400 },
  { couseName: "GO", price: 500 },
  { couseName: "CPP", price: 600 },
];
let totalCoursePrice = course.reduce((acc, currentCourse) => acc + currentCourse.price, 0);

console.log(totalCoursePrice);