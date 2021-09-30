const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let positionX = 0;
  let positionY = 0;
  for (let move of moves) {
    if (move === "north") {
      positionY += 1;
    } else if (move === "west") {
      positionX -= 1;
    } else if (move === "south") {
      positionY -= 1;
    } else if (move === "east") {
      positionX += 1;
    }
  }
  const position = [positionX, positionY];
  return position;
};

finalPosition(moves);
