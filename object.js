const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Dog",
    age: 2,
  },
};

// * Access to Nested Object
// ? ทำได้ 2 วิธี
// console.log(person.pet.kind);
// ! หรือด้านล่าง
// console.log(person["pet"]["kind"]);

// * ตัวอย่าง เพิ่มเติม

const keyName = "name";
// ! กรณีได้ด้านบนมาจากที่อื่น ในรูปแบบ keyName

//console.log("Name:", person.name);
// ! ถ้าใช้แบบ . ด้านบน จะใช้ keyName ไม่ได้ ; ถ้าฝืนใช้.keyName เวลา Run จะกลายเป็น undefined
//console.log("Name:", person[keyName]);
// ! ถ้าใช้แบบ [] จะใช้ keyName ที่ได้ข้อมูลจากที่อื่นมาได้

// * Array with Object

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

/*data.forEach((data, index) => {
  console.log(
    `  Person ${index + 1} 
  Name: ${data.name}
  Age: ${data.age}
  Job: ${data.job} 
  ------------------`
  );
});*/

// ! การใช้ \n

/*data.forEach((data, index) => {
  console.log(
    ` Person ${index + 1} \n Name: ${data.name}\n Age: ${data.age}\n Job: ${
      data.job
    }\n ------------------`
  );
});*/
