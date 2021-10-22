const squareCode = function (message) {
  // Put your solution here
  let result = "";
  let array = [];
  let tempString = "";
  let criptedString = "";
  let count = 0;

  result = message.replace(/\s/g, "").toLowerCase();
  const spliter = Math.ceil(Math.sqrt(result.length));

  for (let i = 0; i < result.length; i++) {
    if ((i + 1) % spliter === 0) {
      tempString += result[i] + "\n";
    } else {
      tempString += result[i];
    }
  }
  array = tempString.split("\n");

  while (criptedString.length <= tempString.length) {
    array.forEach((el) => {
      if (el[count] === undefined) return;
      criptedString += el[count];
    });
    criptedString += " ";
    count++;
  }

  return criptedString;
};

console.log(
  squareCode(
    "If man was meant to stay on the ground god would have given us roots"
  )
);
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
