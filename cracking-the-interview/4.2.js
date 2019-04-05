const createBinaryNode = require("../binary-tree");

function createMinimalBST(ascArr) {
  return minimalHeightBST(ascArr, 0, ascArr.length - 1);
}

function minimalHeightBST(ascArr, start, end) {
  if (end < start) {
    return null;
  }

  const mid = Math.floor((start + end) / 2);
  const root = createBinaryNode(ascArr[mid]);
  root.left = minimalHeightBST(ascArr, start, mid - 1);
  root.right = minimalHeightBST(ascArr, mid + 1, end);
  return root;
}

const result = createMinimalBST([1, 3, 4, 6, 8]);
let resultText = "";
function visitFn(node) {
  resultText += `${node.key} => `;
}
TRAVERSLAS["IN_ORDER"](result, visitFn);
console.log(resultText);
