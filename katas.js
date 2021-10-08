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

// kata 5
const urlEncode = function (text) {
  // Put your solution here
  let string = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      string += "%20";
    } else {
      string += text[i];
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// kata 6
const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let coordinate = [];

  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      //     check if spot has alreary found
      if (coordinate.length === 0) {
        if (vehicle === "regular") {
          if (spots[i][j] === "R") {
            coordinate = [j, i];
          }
        } else if (vehicle === "small") {
          if (spots[i][j] === "S" || spots[i][j] === "R") {
            coordinate = [j, i];
          }
        } else if (vehicle === "motorcycle") {
          if (
            spots[i][j] === "R" ||
            spots[i][j] === "S" ||
            spots[i][j] === "M"
          ) {
            coordinate = [j, i];
          }
        }
      } else break;
    }
  }
  return coordinate.length === 0 ? false : coordinate;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);

// kata 7
const checkAir = function (samples, threshold) {
  // Code here!
  let indexOfPollution = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      indexOfPollution++;
    }
  }

  if (indexOfPollution / samples.length <= threshold) {
    return "clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);

// kata8
const repeatNumbers = function (data) {
  // Put your solution here
  let string = "";

  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i][1]; j++) {
      string += data[i][0];
    }

    // put a comma between elements
    if (data.length !== 1 && i + 1 < data.length) {
      string += ", ";
    }
  }

  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
