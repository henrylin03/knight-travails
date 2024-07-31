import createNode from "./createNode.mjs";

const isSameArr = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

export default function knightMoves(startCoordinates, endCoordinates) {
  const startNode = createNode(startCoordinates);
  const nodesQueue = [startNode];
  const visitedCoordinates = new Set();

  while (nodesQueue.length > 0) {
    const currentNode = nodesQueue.shift();
    console.log("currentNode:", currentNode); //TODO: delete - this is for debugging
    if (isSameArr(currentNode.coordinates, endCoordinates)) break; // may need to wrap this whole part into another method/function so that it returns the node, and then we read the node's details

    let currentDepth = currentNode.depth;
    const nextCoordinates = currentNode.getNextCoordinates();
    nextCoordinates.forEach((coordinates) => {
      if (visitedCoordinates.has(coordinates)) return; // skip visited coordinates
      const newNode = createNode(coordinates, currentDepth + 1);
      newNode.previousNode = currentNode;
      nodesQueue.push(newNode);
    });
  }

  console.log("FOUND!");
}