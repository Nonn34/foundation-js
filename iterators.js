const price = [10, 20, 30, 40, 50];

// * 001- การใช้ .forEach
// ? เป็นการเรียกแต่ละตัว ตามหัวข้อที่ต้องการ ; Callback fn Return Void

/*price.forEach((price, idx) => {
  console.log("ลำดับที่" + (idx + 1), "ราคา" + price + "บาท");
});
// ! เขียนได้สองแบบ ด้านล่างเป็นแบบย่อ
price.forEach((price, idx) => {
  console.log(`ลำดับที่ ${idx + 1} ราคา ${price} บาท`);
});*/

// * 002- การใช้ .map
// ? จะ Return New Array ; Callback fn Return Value

/*const priceAftersale = price.map((price, idx) => {
  console.log(
    "ราคาโปรโมชันลด50%ทั้งร้าน " + "สินค้าลำดับที่" + (idx + 1),
    "เหลือเพียง" + price / 2,
    "บาท"
  );
});
// ! เขียนได้สองแบบ ด้านล่างเป็นแบบย่อ
const priceAftersale = price.map((price, idx) => {
  console.log(
    `ราคาโปรโมชันลด50%ทั้งร้าน สินค้าลำดับที่ ${idx + 1}
    เหลือเพียง ${price / 2} บาท`
  );
});*/

// * 003- การใช้ .filter
// ? จะ Return Filter Array ; Callback fn Return Boolean

/*const inBudgetConstr = price.filter((price) => {
  return price <= 30;
});
console.log(`ราคาสินค้าในร้านที่ซื้อได้ มี ${inBudgetConstr} หน่วยเป็นบาท`);*/

// * 004- การใช้ .reduce
// ? จะ Return Reduced Value ; Callback fn Return Value

/*const buyEachAll = price.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(`ซื้อทั้งร้านอย่างละชิ้น หมดไป ${buyEachAll} บาท`);*/
// ! ใส่ optional parameter -initialValue ******************* ดูจุดที่ต้องใส่ดีๆ ex. ใส่เลข 15
/*const goBuyingEachAll = price.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 15);
console.log(`เดินทางไปซื้อแบบ ซื้อทั้งร้านอย่างละชิ้น หมดไป ${goBuyingEachAll} บาท`);*/
