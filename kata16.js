const makeCase = function (input, cases) {
  // Put your solution here
  let result = "";
  const vowels = ["a", "e", "i", "o", "u"];

  for (i = 0; i < input.length; i++) {
    // check if case is array of cases
    if (Array.isArray(cases)) {
      cases.forEach((c) => {
        switch (c) {
          case "upper":
            result += input[i].toUpperCase();
            break;

          case "snake":
            result = result.replace(/\s/g, "_");
            break;
        }
      });
    } else {
      switch (cases) {
        case "camel":
          if (input[i] === " ") {
            result += input[i + 1].toUpperCase();
          } else if (input[i - 1] === " ") {
            continue;
          } else {
            result += input[i];
          }
          break;
        case "pascal":
          if (i === 0) {
            result += input[i].toUpperCase();
          } else if (input[i] === " ") {
            result += input[i + 1].toUpperCase();
          } else if (input[i - 1] === " ") {
            continue;
          } else {
            result += input[i];
          }
          break;

        case "snake":
          if (input[i] === " ") {
            result += "_";
          } else {
            result += input[i];
          }
          break;

        case "kebab":
          if (input[i] === " ") {
            result += "-";
          } else {
            result += input[i];
          }
          break;

        case "title":
          if (input[i - 1] === " ") {
            result += input[i].toUpperCase();
          } else {
            result += input[i];
          }
          break;

        case "vowel":
          for (let letter of input) {
            if (vowels.includes(letter)) {
              letter = letter.toUpperCase();
            }
            result += letter;
          }
          return result;
          break;

        case "consonant":
          for (let letter of input) {
            if (!vowels.includes(letter)) {
              letter = letter.toUpperCase();
            }
            result += letter;
          }
          return result;
          break;
      }
    }
  }
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
