import createNode from "./createNode.mjs";

const isSameArr = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

export default function knightMoves(startCoordinates, endCoordinates) {
  console.log(`
Finding the shortest path a knight can travel on a chessboard from ${JSON.stringify(
    startCoordinates
  )} to ${JSON.stringify(endCoordinates)}...`);

  const findNodeAtEndCoordinates = () => {
    const startNode = createNode(startCoordinates);
    const nodesQueue = [startNode];
    const visitedCoordinates = new Set();

    while (nodesQueue.length > 0) {
      const currentNode = nodesQueue.shift();
      if (isSameArr(currentNode.coordinates, endCoordinates))
        return currentNode;

      let currentDepth = currentNode.depth;
      const nextCoordinates = currentNode.getNextCoordinates();
      nextCoordinates.forEach((coordinates) => {
        if (visitedCoordinates.has(JSON.stringify(coordinates))) return; // skip visited coordinates
        visitedCoordinates.add(JSON.stringify(coordinates)); // ensure matches by turning into string

        const newNode = createNode(coordinates, currentDepth + 1);
        newNode.previousNode = currentNode;
        nodesQueue.push(newNode);
      });
    }
  };

  const findPathFromStart = (node) => {
    const res = [];

    let currentNode = node;
    while (currentNode) {
      res.push(currentNode.coordinates);
      currentNode = currentNode.previousNode;
    }

    return res.reverse();
  };

  const endNode = findNodeAtEndCoordinates();
  const path = findPathFromStart(endNode);
  console.log(`You made it in ${endNode.depth} moves! Here's your path:`);
  path.forEach((coordinates) => console.log(coordinates));
}
