const { createStack } = require("../stack");

class QueueUsingStack {
  constructor() {
    this.first = createStack();
    this.second = createStack();
    this.length = 0;
  }

  enqueue(value) {
    this.first.push(value);
  }

  dequeue() {
    if (this.second.length) {
      return this.second.pop();
    }

    let item = this.first.pop();
    while (item) {
      this.second.push(item);
      item = this.first.pop();
    }

    return this.second.pop();
  }

  peek() {
    if (this.second.length) {
      return this.second.peek();
    }

    let item = this.first.pop();
    while (item) {
      this.second.push(item);
      item = this.first.pop();
    }

    return this.second.peek();
  }
}
// const queue = new QueueUsingStack();

// queue.enqueue("Joy");
// queue.enqueue("Matt");
// queue.enqueue("Pavel");

// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
