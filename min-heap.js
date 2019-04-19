/*
  Min heap is a binary tree with the following properties:
  1) compolete tree
  2) recursively minumum - every node value is minumum among all children nodes
  Arr[(i-1)/2]	Returns the parent node
  Arr[(2*i)+1]	Returns the left child node
  Arr[(2*i)+2]	Returns the right child node
*/

function createMinHeap() {
  const arr = [];

  function parentIdx(index) {
    return Math.floor((index - 1) / 2);
  }

  function leftChildIdx(idx) {
    return idx * 2 + 1;
  }

  function rightChildIdx(idx) {
    return idx * 2 + 2;
  }

  // A recursive method to heapify a subtree with the root at given index 
  // This method assumes that the subtrees are already heapified 
  function minHeapify(i) {
    const length = arr.length;
    const left = leftChildIdx(i);
    const right = rightChildIdx(i);
    let smallest = i;

    if (left < length && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < length && arr[right] < arr[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
      minHeapify(smallest);
    }
  }

  return {
    getMin: function() {
      return arr[0]; 
    },
    extractMin: function() {
      const min = arr[0];

      arr[0] = arr.pop();
      minHeapify(0);

      return min;
    },
    decreaseKey: function(idx, newVal) {
      let i = idx;
      arr[i] = newVal;

      while(i !== 0 && arr[parentIdx(i)] > newVal) {
        arr[i] = arr[parentIdx(i)];
        arr[parentIdx(i)] = newVal;
        i = parentIdx(i);
      }
    },
    insert: function(value) {
      let idx = arr.length;
      arr[idx] = value;
      
      while(idx !== 0 && arr[parentIdx(idx)] > value) {
        arr[idx] = arr[parentIdx(idx)];
        arr[parentIdx(idx)] = value;
        idx = parentIdx(idx);
      }
    },
    // This function deletes value at index i. It first reduced value to minus 
    // infinite, then calls extractMin() 
    delete: function(i) {
      this.decreaseKey(i, Number.NEGATIVE_INFINITY);
      this.extractMin();
    }
  }
}

/* USAGE:

const minHeap = createMinHeap();

minHeap.insert(3);
minHeap.insert(2);
minHeap.delete(1);
minHeap.insert(15); 
minHeap.insert(5); 
minHeap.insert(4); 
minHeap.insert(45);

console.log(minHeap.extractMin());
console.log(minHeap.getMin());
minHeap.decreaseKey(2, 1);
console.log(minHeap.getMin());

*/