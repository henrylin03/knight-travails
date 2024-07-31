export default function createNode(coordinates, depth = 0) {
  const getValidNextMoves = () => {
    const res = [];
    const col = coordinates[0];
    const row = coordinates[1];

    const potentialNextPositions = [
      [col + 2, row + 1],
      [col + 2, row - 1],
      [col - 2, row + 1],
      [col - 2, row - 1],
      [col + 1, row + 2],
      [col + 1, row - 2],
      [col - 1, row + 2],
      [col - 1, row - 2],
    ];

    potentialNextPositions.forEach((positionArr) => {
      if (positionArr.some((coordinate) => coordinate < 0 || coordinate > 7))
        return;
      res.push(positionArr);
    });

    return res;
  };
  

  // previous property (where the coordinate came from)
  // coordinates property
  // how deep it is (number of moves to get here from the starting position)
  return { coordinates, depth, getValidNextMoves };
}
