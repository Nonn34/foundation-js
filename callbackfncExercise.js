function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }
  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item >= 0;
});

console.log(afterFilter);
