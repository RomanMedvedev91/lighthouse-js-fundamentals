// KATA 1!

const sumLargestNumbers = function (data) {
  // Put your solution here
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] > num2 && data[i] < num1) {
      num2 = data[i];
    }
  }
  console.log(num1, num2);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// KATA 2!

const conditionalSum = function (values, condition) {
  // Your code here
  let result = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        result += values[i];
      }
    } else if (condition === "odd") {
      if (values[i] % 2 !== 0) {
        result += values[i];
      }
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// KATA 3!
const numberOfVowels = function (data) {
  // Put your solution here
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (data[i] === vowels[j]) {
        countVowels++;
      }
    }
  }
  return countVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// KATA 4!
const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let nameLength = 0;
  let objectLong = {};

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > nameLength) {
      nameLength = instructors[i].name.length;
      objectLong = instructors[i];
    } else if (instructors[i].name.length === nameLength) {
      return;
    }
  }

  return objectLong;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
