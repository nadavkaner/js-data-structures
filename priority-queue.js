const { createQueue } = require('./queue');

function createPriorityQueue() {
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();
  
  return {
    enqueue(item, isHighPriority) {
      isHighPriority ? 
        highPriorityQueue.enqueue(item) :
        lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  }
}

const priorityQueue = createPriorityQueue();

priorityQueue.enqueue('Fix a bug');
priorityQueue.enqueue('Fix another bug');
priorityQueue.enqueue('Do another feature');

console.log(priorityQueue.dequeue());
priorityQueue.enqueue('Emergency task!', true);
console.log(priorityQueue.peek());

