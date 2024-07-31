import createNode from "./createNode.mjs";

const isSameArr = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

export default function knightMoves(startCoordinates, endCoordinates) {
  const findNodeAtEndCoordinates = () => {
    const startNode = createNode(startCoordinates);
    const nodesQueue = [startNode];
    const visitedCoordinates = new Set();

    while (nodesQueue.length > 0) {
      const currentNode = nodesQueue.shift();
      console.log("currentNode:", currentNode);
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

  const matchingNode = findNodeAtEndCoordinates();
  console.log(`You made it in ${matchingNode.depth} moves! Here's your path:
${matchingNode.previousNode.coordinates}
`);
}
