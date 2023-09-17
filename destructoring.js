// * Array Destructoring
// ? จัดโครงสร้างใหม่ ทำให้เกิดตัวแปร ที่เก็บค่า String

/*const fruits = ["Apple", "Banana", "Cherry"];

const [fruit1, fruit2, fruit3] = fruits;
// ! ต้องเรียงลำดับตามเท่านั้น ..แต่ชื่ออะไรก็ได้..

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);*/

// * Object Destructoring
// ?

const person = {
  firstName: "John",
  country: "Thailand",
  job: "Front-end Developer",
};
const { firstName, country, job } = person;
// ! ต้องใช้ชื่อ key ที่ match เท่านั้น ..แต่ไม่ต้องเรียงลำดับ..

console.log(firstName);
console.log(country);
console.log(job);

// * Rest Operator
// * Array
const [firstname, lastname, ...otherinfo] = [
  "John",
  "Doe",
  "Front-end Dev",
  "Cleverse",
  "Male",
];
console.log(otherinfo);
// * Object

// * Spread Operator
// * Array

// * Object
