function createQueue() {
  const queue = [];
  
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  }
}

exports.createQueue = createQueue;

// const q = createQueue();

// q.enqueue('Nadav is here');
// q.enqueue('Hello nadav');
// q.enqueue('This is the last person');

// q.dequeue();
// q.dequeue();
// console.log(q.length);
// console.log(q.dequeue());
// console.log(q.isEmpty());