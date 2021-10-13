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

// KATA 9

const camelCase = function(input) {
  // Your code here
  let result = '';
  
  for(i = 0; i < input.length; i++) {
    if(input[i] === ' ') {
      
      result += input[i+1].toUpperCase();
    } 
    else if (input[i - 1] === ' ') {
      continue;
    }
      else {
      result+= input[i];
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


// KATA10

const multiplicationTable = function(maxValue) {
  // Your code here
  let string = '';
  for(let i = 1; i <= maxValue; i++) {
    for(let j = 1; j <= maxValue; j++) {
      string+= j * i + ' ';
    }
    string += '\n';
  }
  
  return string;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

// KATA 11
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return 4/3 * PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return 1 / 3 * PI * height * Math.pow(radius, 2);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
let totalVolume = 0;
  for(let i = 0; i < solids.length; i++) {
    if(solids[i].type === 'sphere') {
      totalVolume += sphereVolume(solids[i].radius);
}
    else if(solids[i].type === 'cone') {
      totalVolume += coneVolume(solids[i].radius, solids[i].height);

    } else if(solids[i].type === 'prism') {
      totalVolume += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
    }
  }
  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// KATA 12

const ingredientCheck = function(backeres, ingredients) {
  let match = false; 
  for(const backery of backeres) {
    for(const ingredient of ingredients) {
      if(backery === ingredient) {
        match = true;
      }
    }
  }
  return match;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  foundRecipes = '';
  for(const recipe of recipes) {
    if(ingredientCheck(bakeryA, recipe.ingredients) &&
      ingredientCheck(bakeryB, recipe.ingredients)) {
    foundRecipes = recipe.name;
    }
}
  
  return foundRecipes;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// KATA 13

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const talkingCalendar = function(date) {
  // Your code here
  let year = '';
  let month = '';
  let day = '';
  let finalData = '';
  
//   split the date on variables
  for(let i = 0; i < date.length; i++) {
    if(i < 4) {
      year += date[i];
    } else if(i > 4 && i < 7) {
      month += date[i];
    } else if(i > 7) {
      day += date[i];
    }
  }
  
//  human readable month
  for(let i = 0; i < months.length; i++) {
    if(i == month - 1) {
      finalData += months[i] + ' ';
    } 
  }
  
//    human readable day
  if(day === '01') {
      finalData += day[1] + 'st, ';
    } else if(day === '02') {
      finalData += day[1] + 'nd, ';
    } else if(day === '03') {
      finalData += day[1] + 'd, ';
    } else if(day >= '04' && day <= '09') {
      finalData += day[1] + 'th, ';
    } else{
        finalData += day + 'th, ';
    }
  
//   add year
  finalData += year;
  
  return finalData;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/01/24"));


// KATA14
const calculateChange = function(total, cash) {
  // Your code here
  let changeObject = {};
  let change = cash % total;
 
  while (change > 1) {
  if(change / 2000 > 1) {
//     add twenty dollar
    changeObject.twentyDollar = Math.trunc(change/2000);
    change %= 2000;
    
  } else if(change / 1000 > 1) {
//     add ten dollar
    changeObject.tenDollar = Math.trunc(change/1000);
    change %= 1000;
  } else if(change /200 > 1) {
//     add two dollar
    changeObject.twoDollar = Math.trunc(change/200);
    change %= 200;
  } else if(change / 100 > 1) {
//     add one dollar
    changeObject.oneDollar = Math.trunc(change/100);
    change %= 100;
  } else if(change / 25 > 1) {
//     add quarter
    changeObject.quarter = Math.trunc(change/25);
    change %= 25;
  } else if(change / 10 > 1) {
//       add dime
    changeObject.dime = Math.trunc(change/10);
    change %= 10;
  } else if(change / 5 > 1) {
//     add nickel
    changeObject.nickel = Math.trunc(change/5);
    change %= 5;
  } else if(change / 1 > 1) {
//     add penny
    changeObject.penny = Math.trunc(change/1);
    change %= 1;
  }
  else {
    console.log('change less then 1 penny');
  }
}
    return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));