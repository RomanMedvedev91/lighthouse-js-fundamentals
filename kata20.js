const blocksAway = function (directions) {
  // Put your solution here
  let x = 0;
  let y = 0;
  let orientation = "";
  let taxiCoordinates = {};

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right") {
      // check orientation
      if (orientation === "N") {
        x += directions[i + 1];
        orientation = "E";
      } else if (orientation === "E") {
        y -= directions[i + 1];
        orientation = "S";
      } else if (orientation === "S") {
        x -= directions[i + 1];
        orientation = "W";
      } else if (orientation === "W") {
        y += directions[i + 1];
        orientation = "N";
      } else {
        x += directions[i + 1];
        orientation = "E";
      }
    }
    if (directions[i] === "left") {
      if (orientation === "N") {
        x -= directions[i + 1];
        orientation = "W";
      } else if (orientation === "E") {
        y += directions[i + 1];
        orientation = "N";
      } else if (orientation === "S") {
        x += directions[i + 1];
        orientation = "E";
      } else if (orientation === "W") {
        y -= directions[i + 1];
        orientation = "S";
      } else {
        y += directions[i + 1];
        orientation = "N";
      }
    }
  }

  taxiCoordinates["east"] = x;
  taxiCoordinates["north"] = y;

  return taxiCoordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
