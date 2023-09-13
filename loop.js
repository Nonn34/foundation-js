/*function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];

  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Amsterdam") {
      //break;
      continue;
    }
    console.log(tripLocation[i]);
  }
}
loopThroughArray();*/

/*function nestedLoop() {
    for (let i=0; i < 3; i++) {
        console.log("i", i)
        for (let j=0; j < 3) {
            console.log("j", j);
        }
    }
}*/

/*function oddOrEven() {
  for (let i = 0; i <= 15; i++)
    if (i % 2 === 0) {
      console.log([i] + " is even");
    } else {
      console.log([i] + " is odd");
    }
}
oddOrEven();*/

function oddOrEven() {
  let i = 0;
  while (i <= 15) {
    if (i % 2 === 0) {
      console.log([i] + " is even");
    } else {
      console.log([i] + " is odd");
    }
    i++;
  }
}
oddOrEven();
