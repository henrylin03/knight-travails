import createKnight from "./createKnight.mjs";

// helper to compare arrays
const isSameArray = (arr1, arr2) =>
  JSON.stringify(arr1) === JSON.stringify(arr2);

export default function knightMoves(startPosition, endPosition) {
  let movesCount = 0;
  const coordinatesQueue = [[...startPosition, movesCount]]; // weighted with depth
  const visited = new Set();

  while (coordinatesQueue.length) {
    console.log("\n--start--");
    console.log("coordinatesQueue:", coordinatesQueue);

    const node = coordinatesQueue.shift();
    const position = node.slice(0, 2);
    movesCount = node[2];
    console.log("current position:", position);

    if (isSameArray(position, endPosition)) break;
    visited.add(position);
    movesCount++;

    const knight = createKnight(position);
    const validNextMoves = knight.getValidNextMoves();
    if (validNextMoves.has(endPosition)) break;
    validNextMoves.forEach((position) => {
      if (!visited.has(position))
        coordinatesQueue.push([...position, movesCount]);
    });
    console.log("--end--\n");
  }
  console.log("found!!", movesCount, "moves");

  return;
}
