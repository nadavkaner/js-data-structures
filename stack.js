function createStack() {
  const stack = [];

  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[this.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  }
}