const { createQueue } = require('./queue');

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(key) {
      const node = createBinaryNode(key);
      this.left = node;
      return node;
    },
    addRight(key) {
      const node = createBinaryNode(key);
      this.right = node;
      return node;
    }
  }
}

const TRAVERSLAS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSLAS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSLAS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSLAS.PRE_ORDER(node.left, visitFn);
      TRAVERSLAS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSLAS.POST_ORDER(node.left, visitFn);
      TRAVERSLAS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  },
  LEVEL_ORDER: (node, visitFn) => {
    const queue = createQueue();
    queue.enqueue(node);

    while(!queue.isEmpty()) {
      const current = queue.dequeue();

      visitFn(current);

      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
  }
}

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey);

  return {
    root,
    print(traversalType = 'IN_ORDER') {
      let result = '';

      function visitFn(node) {
        result += `${node.key} => `;
      }

      TRAVERSLAS[traversalType](root, visitFn);

      return result;
    }
  }
}

const binaryTree = createBinaryTree('F');

const G = binaryTree.root.addRight('G');
const I = G.addRight('I');
const H = I.addLeft('H');

const B = binaryTree.root.addLeft('B');
const A = B.addLeft('A');
const D = B.addRight('D');
const C = D.addLeft('C');
const E = D.addRight('E');

console.log(binaryTree.print('LEVEL_ORDER'));
