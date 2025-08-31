//part1
console.log("5" + 7); //57
console.log(Boolean(0)); //false
console.log("10" - "2"); //8
console.log("5" == 5); //true
console.log("5" === 5); // false
console.log(Boolean("")); // false
console.log("5" + true); //5true
console.log("5" * 2); // 10
console.log(0 == false); //true
console.log(Boolean(NaN)); //false

//Part2
//q1
let num = -2;
if (num > 0) {
  console.log(num + " is positive");
} else if (num < 0) {
  console.log(num + " is negative");
} else {
  console.log(num + " is zero");
}
//q2
age = 10;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}
//q3
temp = 20;
if (temp > 0) {
  console.log("Above freezing point");
} else if (temp < 0) {
  console.log("Below freezing point");
} else {
  console.log("Is freezing point");
}

//Part3
//tak1
let f = 1;
let number = 5;
for (let i = 5; i > 0; i--) {
  f *= i;
}
console.log(`The factorial of ${number} is ${f}`);

//task2
const numTerms = 10;
const sequence = [];

if (numTerms >= 1) sequence.push(0);
if (numTerms >= 2) sequence.push(1);

for (let i = 2; i < numTerms; i++) {
  const nextTerm = sequence[i - 1] + sequence[i - 2];
  sequence.push(nextTerm);
}

//task3
let n = 10;
let count = 0;

for (let i = 1; i < n; i++) {
  if (n % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log(`${n} is prime.`);
} else {
  console.log(`${n} is composite.`);
}
//part4

//task1

function average(n1, n2) {
  avg = (n1 + n2) / 2;
  console.log(`The average of ${n1} and ${n2} is ${avg}.`);
}

average(2, 4);

//task2

function factorial(n) {
  let factor = 1;
  if (n < 0) {
    console.log("Can't perform factorial.");
  } else if (n == 0 || n == 1) console.log(`The factorial of ${n} is 1.`);
  else {
    for (let i = n; i > 0; i--) {
      factor *= i;
    }
    console.log(`The factorial of ${n} is ${factor}`);
  }
}

factorial(2);

function isPrime(numb) {
  if (numb < 0) {
    console.log("Can't perform factorial.");
  } else {
    let count = 0;

    for (let i = 1; i < n; i++) {
      if (numb % i == 0) {
        count++;
      }
    }

    if (count == 2) {
      console.log(`${numb} is prime.`);
    } else {
      console.log(`${numb} is composite.`);
    }
  }
}

isPrime(2);

//part5
//task

array = [1, 2, 13, 4, 15];

array.forEach((element) => {
  console.log(element);
});

const squared = array.map((element) => {
  const num = element * element;
  console.log(num);
  return num;
});
console.log(squared);

const odd = array.filter((element) => {
  if (element % 2 != 0) {
    return element;
  }
});

console.log(odd);

const greater = array.find((element) => element > 10);
console.log(greater);

console.log(array.findIndex((element) => element == 4));

console.log(array.includes(5));

console.log(array.slice(0, 3));

const addNum = 6;
const modified = array.splice(array.length - 1, 1, addNum);
console.log(modified);
console.log(array);

const sorted = array.sort((a, b) => a - b);
console.log(sorted);

const numbers = array.join(",");
console.log(numbers);
