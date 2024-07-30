import createKnight from "./createKnight.mjs";

export default function knightMoves(startPosition, endPosition) {
  // at every position, starting from start position, generate list (maybe set?) of valid next moves
  // check if the end position is within those moves - if yes, end and print those statements required (see index.mjs)
  // if not, then find the next layer down of valid moves, check again
  //then trace?? the shortest path once found?? NEEDS RECURSION PROBABLY
  //implement BFS because it's a tree of potential moves - same height - can't really go back up the tree

  //track visited squares too so you never go back to it
  const visited = new Set();

  const knight = createKnight(startPosition);
  console.log(knight.getValidNextMoves());

  return;
}
