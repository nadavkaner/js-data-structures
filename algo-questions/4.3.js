const createQueue = require("../queue");
const createLinkedList = require("../linked-list");

// const q = createQueue();

// q.enqueue('Nadav is here');
// q.enqueue('Hello nadav');
// q.enqueue('This is the last person');

// 4.3
function listOfDepths(bst) {
  const current = createLinkedList();

  const linkedLists = [];
  if (bst !== null) {
    current.push(bst);
  }

  while (current.length) {
    result.push(current);

    const linkedList = createLinkedList();
    arr.forEach(x => linkedList.push(x.key));
    linkedLists.push(linkedList);
    arr.forEach(x => {
      if (x.left !== null) {
        queue.enqueue(x.left);
      }
      if (x.right !== null) {
        queue.enqueue(x.right);
      }
    });
  }

  return linkedLists;
}
