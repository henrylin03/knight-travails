import knightMoves from "./knightMoves.mjs";

knightMoves([3, 3], [4, 3]);
// expected: You made it in 3 moves!  Here's your path:
// [3,3]
// [4,5]
// [2,4]
// [4,3]

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
