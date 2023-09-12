const myArr = ["Men", 22];

console.log("My name:", myArr[0]);
console.log("My age:", myArr[1]);

console.log(myArr[10]);

myArr.push("Wed");
myArr.push(2000);

console.log(myArr);

const newArr = myArr.slice(1, 3);

console.log(myArr);
console.log(newArr);

console.log(myArr.indexOf(22));
console.log(myArr.concat("Hello", "cleverse academy"));

/* const newArr2 = myArr.concat("Hello", "cleverse academy");
   console.log(newArr2) */
