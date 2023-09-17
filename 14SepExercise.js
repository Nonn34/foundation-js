// ! ข้อ.1 #
// ! mapRevertSign(arr) takes in an array of numbers,
// ! and returns a new array of numbers containing opposite signs of the original array.
/*const Arr = [1, -4, 2, 0];

const mapRevertSign = (arr) => {*/
// * ใช้ .forEach
/*const a = [];

  arr.forEach((elem) => {
    a.push(0 - elem);
  });
  return a;
};
console.log(mapRevertSign([1, -4, 2, 0]));*/

// * ใช้ .map
/*return arr.map((elem) => {
    return 0 - elem;
  });
};
console.log(mapRevertSign([1, -4, 2, 0]));*/
// ? คำตอบต้องได้ [-1, 4, -2, 0]

// ! ข้อ.2 #
// ! reverse(arr) returns a new array which is arr reversed.
// ! - You are not allowed to use Array.reverse method.

/*const arr = [1, 2, 3, 4, 5];

reverse = (arr) => {
  return arr.map((v, i) => {
    return arr[arr.length - i - 1];
  });
};

console.log(reverse(arr));*/
// ? คำตอบต้องได้ [5, 4, 3, 2, 1]

// ! ข้อ.3 #
// ! isMember(mem, arr) returns a boolean indicating whether mem is a member of arr.
// ! - Do not use Array helper methods.
// ! - Use a simple for loop.

/*const arrNum = (5, [1, 3, 7, 12]);
const arrName = ("john", ["jane", "jim", "john"]);
isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mem) return true;
  }
  return false;
};

console.log(isMember(5, [1, 3, 7, 12]));

console.log(isMember("john", ["jane", "jim", "john"]));*/
// ? คำตอบต้องได้ false
// ? คำตอบต้องได้true

// ! ข้อ.4 #
// ! unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.
// ! You can use isMember just created from exercise No.3

/*const arr = [10, 20, 10, 20, 30, 50, 60, 100];

isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mem) return true;
  }
  return false;
};
unique = (arr) => {
  return arr.reduce((prev, curr) => {
    if (isMember(curr, prev)) {
      return prev;
    } else {
      prev.push(curr);
      return prev;
    }
  }, []);
};

console.log(unique(arr));*/
// ? คำตอบต้องได้ [10, 20, 30, 50, 60, 100]

// ! ข้อ.5 #
// ! draw(n) takes in a number n, and prints the stars (*) into the console to become like in the answer below.

/*draw = (n) => {
	const a = "*".repeat(n);
	p = "";
	for (let i = 0; i < n; i++) {
		p += a + "\n";
	}
	console.log(p);
};
draw(5);*/
// ? คำตอบต้องได้
// ? *****
// ? *****
// ? *****
// ? *****
// ? *****

// ! ข้อ.6 #
// ! Re-write draw(n) from exercise No.5 as drawNg(n) to prints this answer pattern.

// * ทำแบบ Nested
/*const drawNg = (n) => {
    if (n < 0) return;
    for (let i = 0; i < n; i++) {
      // i Represents รอบ
      let s = ""
      for (let j = 0; j <= i; j++) {
        // j Represents จำนวนดาว
        s += "*"
      }
      console.log(s);
    }
  };
  drawNg(5);*/

// * ทำแบบไม่ Nested (น่าจะดีกว่า)
/*const drawNg = (n) {
if (n < 0) return;
let s = ""
 for (let i = 0; i < n; i++){
    s += "*"
    console.log(s)
 }
 };
 drawNg(5);*/
// ? คำตอบที่ต้องได้
// ? *
// ? **
// ? ***
// ? ****
// ? *****

// ! ข้อ.7
// ! mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2.
// * $

/*const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
const mutual = [];

for (let i = 0; i < class2.length; i++) {
  for (let j = 0; j < class1.length; j++) {
    if (class2[i] === class1[j]) {
      mutual.push(class2[i]);
    }
  }
}
console.log(mutual);*/
// ? คำตอบต้องได้ ["John", "Bob"]

// ! ข้อ.8
// ! fizzBuzz(n) iterates over inclusive range [1, n],
// ! and for each element in the range, fizzBuzz(n)
// ! prints Fizz if the element is divisible by 3,
// ! Buzz if the element is divisible by 5,
// ! and FizzBuzz if the element is divisible by 3 and 5.
// ! If no conditions are met, fizzBuzz(n) prints the element.
// * $

/*const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
      if (i === 3) {
        console.log(`Fizz\n${i}`);
      } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else {
        console.log(i);
      }
    }
  };
  fizzBuzz(20);*/
// ? คำตอบต้องได้
// ? 1
// ? 2
// ? Fizz
// ? 3
// ? 4
// ? Buzz
// ? Fizz
// ? 7
// ? 8
// ? Fizz
// ? Buzz
// ? 11
// ? Fizz
// ? 13
// ? 14
// ? FizzBuzz
// ? 16
// ? 17
// ? Fizz
// ? 19
// ? Buzz

// ! ข้อ.9 #
// ! gcd(a, b) returns greatest common divisor (GCD) between the pair a, b.

// * complete
/*gcd = (a, b) => {
	while (a != b) {
		if (a > b) {
			a -= b;
		} else {
			b -= a;
		}
	}
	return a;
};
console.log( gcd(10, 15));
5
console.log(gcd(18, 12));
6
console.log( gcd(3, 2));*/

// * incomplete
/*
const gcd = (i, j) => {
  for (let x = 6; x >= 1; x--) {
    if (i % x === 0 && j % x === 0) {
      console.log(x);
      break;
    }
  }
};

console.log(gcd(10, 15));
console.log(gcd(18, 12));
console.log(gcd(3, 2));*/

// ? คำตอบต้องได้ 5, 6, 1;

// ! ข้อ.10
// ! filterLt(n, arr) takes in an a number n and an array of numbers arr,
// ! and returns a new array containing all elements of arr that is lesser than (lt) n.
// ! - Do not use Array helper methods.
// ! - Use a simple for loop.
// * $

/*const arr = [120, 112, 111, 130, 169, 101];

const filterLt = (n, arr) => {
  const saveValue = [];
  for (let i = 0; i < arr.length; i++)
    if (n > arr[i]) {
      //saveValue.push(arr[i]);
      saveValue[saveValue.length] = arr[i];
    }
  return saveValue;
};

console.log(filterLt(0, arr));
console.log(filterLt(112, arr));*/
// ? คำตอบต้องได้ [] กับ [111, 101]

// ! ข้อ.11
// ! filterGt(n, arr) performs similar business logic to filterLt(n, arr) in exercise No.10,
// ! but instead of doing a lesser-than test, it does a greater-than test.
// ! - Do not use Array helper methods.
// ! - Use a simple for loop.
// * $

/*const arr = [120, 112, 111, 130, 169, 101];

const filterGt = (n, arr) => {
  const saveValue = [];
  for (let i = 0; i < arr.length; i++)
    if (n < arr[i]) {
      //saveValue.push(arr[i]);
      saveValue[saveValue.length] = arr[i];
    }
  return saveValue;
};

console.log(filterGt(0, arr));
console.log(filterGt(112, arr));*/
// ? คำตอบต้องได้ [120, 112, 111, 130, 169, 101] กับ [120, 130, 169]

// ! ข้อ.12 #
// ! Implement a programmable logic to compute compounded return
// ! as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period,
// ! interest is an interest percentage per period,
// ! and n is the number of periods of the investment.

// * complete

/*const compoundedReturn = (amount, interest, n) => {
    return amount * (1 + interest / 100) ** n;
  };
  console.log(compoundedReturn(100, 1, 1));
  console.log(compoundedReturn(100, 10, 1));
  console.log(compoundedReturn(100, 10, 2));*/

// * incomplete
/*const compoundedReturn = (amount, interest) => {
    const periodGet = [];
    for (let x = amount + ( amount x (interest / 100)))
    i++
     return periodGet;
 };*/
// ? คำตอบต้องได้
// ? compoundedReturn(100, 1, 1) // 101
// ? compoundedReturn(100, 10, 1) // 110
// ? compoundedReturn(100, 10, 2) // 121

// ! ข้อ.13 #
// ! mean(arr) returns the mean average value of arr dataset (represented as an array).
// ! If any one of arr members are of non-number type, mean(arr) returns null.

/*A = [1, 2, 3];
B = [1, "foo", 3];

mean = (arr) => {
	const result = arr.reduce((prev, curr) => {
		if (typeof prev != "number" || typeof curr != "number") return null;
		return prev + curr;
	});
	if (result == null) return result;
	return result / arr.length;
};

console.log(mean(A));
console.log(mean(B));*/
// ? คำตอบต้องได้
// ? mean([1, 2, 3]) // 2
// ? mean([1, 'foo', 3]) // null

// ! ข้อ.14 #
// ! mid(arr) returns the array containing middle element(s) of array arr.
// ! If the array length is an even number, mid returns the 2 middle elements.\

// *
/*function mid(arr) {
    let middle = Math.floor(arr.length / 2);
  
    return arr.length % 2 === 0
      ? arr.slice(middle - 1, middle + 1)
      : arr.slice(middle, middle + 1);
  }
  
  console.log(mid(["john"]));
  console.log(mid(["foo", "bar", "baz"]));
  console.log(mid([1, 2, 3, 4]));*/

// *
/*const mid = (arr) => {
    if (arr.length === 1) return arr;
  
    const middlePosition = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 0) {
      const elem1 = arr[middlePosition - 1];
      const elem2 = arr[middlePosition];
  
      return [elem1, elem2];
    }
    return [arr[middlePosition]];
  };
  
  console.log(mid(["john"]));
  console.log(mid(["foo", "bar", "baz"]));
  console.log(mid([1, 2, 3, 4]));*/
// ? คำตอบที่ต้องได้
// ? ["john"]
// ? ["bar"]
// ? [2, 3]

// ! ข้อ.15 #
// ! Try learning Array.sort method (function) with this snippet:
// ! The sort method does now work as we expect.
// ! Instead of sorting by numeric value, it seems the sort method sorts elements as strings
// ! (hence it did not produce [1, 2, 3, 11, 12, 13]).
// ! After learning the root cause, try fixing this problem/implementing on your own.

/*const arr = [3, 2, 1, 12, 13, 11]

console.log(arr.sort((a, b) => a - b));*/
// ? คำตอบที่ต้องได้ [1, 11, 12, 13, 2, 3]

// ! ข้อ.16 #
// ! median(arr) returns the statistical median from the dataset arr (represented as an array).
// ! A dataset's median is the element at the middle of the sorted list.
// ! You are allowed to use Array.sort method for this implementation.

/*median = (arr) => {
    if (arr.length === 0) throw new Error("No inputs");
  
    arr.sort(function (a, b) {
      return a - b;
    });
  
    var half = Math.floor(arr.length / 2);
  
    if (arr.length % 2) return arr[half];
  
    return (arr[half - 1] + arr[half]) / 2.0;
  };
  
  console.log(median([2, 1, 5, 3, 4]));*/
// ? คำตอบที่ต้องได้ median([2, 1, 5, 3, 4]) // 3

// ! ข้อ.17 #
// ! initArr(val, len) returns an array of length len with all members initialized to val.

/*initArr = (val, len) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr[i] = val;
	}
	return arr;
};
console.log( initArr(0, 5));*/

// ? คำตอบที่ต้องได้ initArr(0, 5) // [0, 0, 0, 0, 0]

// ! ข้อ.18 #
// ! flatMap(arr) takes in an array of arrays, and returns the flattened array.
// ! - You are not allowed to use Array.flat method.

/*const arr = [
    [1, 2, 3],
    [100, 200],
    [10, 20],
  ];
  
  const flatMap = (arr) => {
    const flattened = [];
    // since we sent the nested array into this function, elem is also an array
    arr.forEach((elem) => {
      // 1st loop
      // elem -> [1, 2, 3]
      // flattened.push(1, 2, 3)
      flattened.push(...elem);
    });
    return flattened;
  };
  console.log(flatMap(arr));*/
// ? คำตอบที่ต้องได้ [1, 2, 3, 100, 200, 10, 20]

// ! ข้อ.19 #
// ! mapMean(arr) takes in an array of arrays,
// ! and returns an array of numbers whose element at index i maps to the mean average value of arr[i].
// ! You are allowed to use mean(arr) from exercise No.13 .

// * จากข้อ 13
/*mean = (arr) => {
  const result = arr.reduce((prev, curr) => {
    if (typeof prev != "number" || typeof curr != "number") return null;
    return prev + curr;
  });
  if (result == null) return result;
  return result / arr.length;
};*/

// * ข้อ 19

/*mapMean = (arr) => {
	return arr.map((i1) => mean(i1));
};
const arr = [
    [1, 2, 3],
    [100, 200],
    [10, 20],
  ]

console.log(mapMean(arr));*/
// ? คำตอบต้องได้  mapMean(arr) // [2, 150, 15]

// ! ข้อ.20 #
// ! fib(n) prints the Fibonacci series up to n terms.
// ! The series look like this:
// ! 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

/*fib = (n) => {
  const fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr.toString();
};
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));*/
// ? คำตอบต้องได้
// ? fib(2) // 0, 1
// ? fib(3) // 0, 1, 1
// ? fib(4) // 0, 1, 1, 2
// ? fib(5) // 0, 1, 1, 2, 3
// ? fib(6) // 0, 1, 1, 2, 3, 5

// ! ข้อ.21 #
// ! toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.
// ! If a character in s is invalid ASCII, the character is omitted from the returned array.

/*const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";

const toBytes = (s) => {
  const bytes = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);

    if (char > 255) {
      continue;
    }
    bytes.push(char);
  }
  return bytes;
};

console.log(toBytes(bar));
console.log(toBytes(foo));
console.log(toBytes(fooFire));*/

// * try another one

/*const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";

const toBytes = (s) => {
  const bytes = [];
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (charCode >= 0 && charCode <= 127) {
      bytes.push(charCode);
    }
  }
  return bytes;
};

console.log(toBytes(bar));
console.log(toBytes(foo)); 
console.log(toBytes(fooFire));*/
// ? คำตอบที่ต้องได้
// ? [66, 97, 114];
// ? [70, 111, 111];
// ? [70, 111, 111];

// ! ข้อ.1 Medium #
// ! maxNegMinPos(arr) takes in an array arr,
// ! and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

/*const arr = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (arr) => {
  let maxNeg = null;
  let minPos = null;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem < 0) {
      if (!maxNeg) {
        maxNeg = elem;
        continue;
      }
      if (elem > maxNeg) {
        maxNeg = elem;
      }
    } else {
      if (!minPos) {
        minPos = elem;
        continue;
      }
      if (elem < minPos) {
        minPos = elem;
      }
    }
  }
  console.log(`MaxNeg is ${maxNeg}\nMinPos is ${minPos}`);
};
maxNegMinPos(arr);*/

// * แบบใช้ min max ช่วย

/*const arr = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (arr) => {
  const maxNeg = [];
  const minPos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      maxNeg.push(arr[i]);
    } else {
      minPos.push(arr[i]);
    }
  }
  console.log(
    `MaxNeg is ${Math.max(...maxNeg)} \n MinPos is ${Math.min(...minPos)}`
  );
};

maxNegMinPos(arr);*/
// ? คำตอบที่ต้องได้
// ? MaxNeg is -1
// ? MinPos is 2

// ! ข้อ.2 Medium #
// ! prime(n) returns an array of first n prime numbers.

/*prime = (n) => {
  const result = [2];
  let a = 3;
  while (result.length < n) {
    if (!result.some((pri) => a % pri === 0)) result.push(a);
    a++;
  }
  return result;
};

console.log(prime(4));
console.log(prime(5));*/

// ? คำตอบที่ต้องได้
// ? prime(4) // [2, 3, 5, 7]
// ? prime(5) // [2, 3, 5, 7, 11]

// ! ข้อ.3 Medium #
// ! drawDown(chart) returns the biggest downward movement within the chart points
// ! Where chart is points in a chart, represented as an array of numbers:
// ! [110, 105, 95, 9, 80, 17, 120, 115, 11]

/*const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

const drawDown = (chart) => {
  return chart
    .map((point, idx) => {
      return point - chart.slice(idx + 1).sort((a, b) => a - b)[0];
    })
    .sort((a, b) => b - a)[0];
};

console.log(drawDown(chart));*/
// ? คำตอบที่ต้องได้ 109

// ! ข้อ.1 CHALLENGES #
// ! ข้อ.2 CHALLENGES #
// ! ข้อ.3 CHALLENGES #
// ! ข้อ.4 CHALLENGES #
// ! ข้อ.5 CHALLENGES #
