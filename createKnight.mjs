export default function createKnight(positionArr) {
  const currentPosition = positionArr;

  const getValidNextMoves = () => {
    return; // return array (or maybe Set?) of valid positions
    // ensure you're not moving off the board
  };

  return { currentPosition, getValidNextMoves };
}
