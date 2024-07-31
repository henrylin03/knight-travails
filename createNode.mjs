export default function createNode(coordinates, depth = 0) {
  const previousNode = null;

  const getNextCoordinates = () => {
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

  return { coordinates, depth, getNextCoordinates, previousNode };
}
