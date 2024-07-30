import createKnight from "./createKnight.mjs";

// helper to compare arrays
const isSameArray = (arr1, arr2) =>
  JSON.stringify(arr1) === JSON.stringify(arr2);

export default function knightMoves(startPosition, endPosition) {
  const coordinatesQueue = [startPosition];
  const visited = new Set();
  let movesCount = 0;

  while (coordinatesQueue.length) {
    console.log("---");
    console.log("movesCount:", movesCount);
    console.log("coordinatesQueue:", coordinatesQueue);
    // console.log("visited positions:", visited);
    const position = coordinatesQueue.shift();

    console.log("current position:", position);

    if (isSameArray(position, endPosition)) break;
    visited.add(position);
    movesCount++;

    const knight = createKnight(position);
    const validNextMoves = knight.getValidNextMoves();
    if (validNextMoves.has(endPosition)) break;
    validNextMoves.forEach((position) => {
      if (!visited.has(position)) coordinatesQueue.push(position);
    });
  }

  // at every position, starting from start position, generate set of valid next moves
  // check if the end position is within those moves - if yes, end and print those statements required (see index.mjs)
  // if not, then find the next layer down of valid moves, check again
  //then trace?? the shortest path once found?? NEEDS RECURSION PROBABLY
  //implement BFS because it's a tree of potential moves - same height - can't really go back up the tree

  //track visited squares too so you never go back to it
  console.log("found!!", movesCount, "moves");

  return;
}
