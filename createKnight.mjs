export default function createKnight(currentPosition) {
  const getValidNextMoves = () => {
    const validMoves = new Set();
    const col = currentPosition[0];
    const row = currentPosition[1];

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

    potentialNextPositions.forEach((position) => {
      const [nextCol, nextRow] = position;
      if (nextCol >= 0 && nextCol <= 7 && nextRow >= 0 && nextRow <= 7)
        validMoves.add(position);
    });

    return validMoves;
  };

  return { currentPosition, getValidNextMoves };
}
