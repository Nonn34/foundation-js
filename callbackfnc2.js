const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];

const loopThroughArray = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    // if (tripLocation[i] === "Amsterdam") {
    //   //break;
    //   continue;
    //}
    //console.log(arr[i]);
    cb(arr[i]);
  }
};
loopThroughArray(tripLocation, (anyParameterToCallBack) => {
  console.log(anyParameterToCallBack);
});

// - Return Parameter Example -

const originalArr = [1, 2, 3, 4];

const mapArray = (arr, cb) => {
  const result = []; // -initial any variable to save a result)
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    //console.log(newItem);
    result.push(newItem);
  }
  return result;
};

const newArr = mapArray(originalArr, (item) => {
  return item * 2;
});
console.log(newArr);
console.log(originalArr);
