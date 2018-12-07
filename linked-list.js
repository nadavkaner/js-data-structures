function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.tail = node;
        this.head = node;
      }
      else {
        this.tail.next = node;
        this.tail = node;
      }

      this.length++;
      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
      }

      let p = this.head;

      while(p.next !== this.tail) {
        p = p.next;
      }

      this.tail = p;
      this.tail.next = null;
      this.length--;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      let i = 0;
      let current = this.head;

      while(i < index) {
        i++;
        current = current.next;
      }

      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        const deletedNode = this.head;
        if (this.tail === this.head) {
          this.tail = null;
        }
        this.head = this.head.next;
        this.length--;
        return deletedNode;
      }

      let i = 0;
      let current = this.head;
      let previous;

      while(i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;

      if (previous.next === null) {
        this.tail = previous;
      }

      this.length--;

      return current;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];
      let current = this.head;

      while(current) {
        values.push(current.value);
        current = current.next;
      }
      
      return values.join(' => ');
    }
  }
}

exports.createLinkedList = createLinkedList;

/*
  USAGE:
*/
// const linkedList = createLinkedList();
// const values = ['a', 'b', 'c', 'd', 'e'];
// const nodes = values.map(x => linkedList.push(x));

// linkedList.pop();
// console.log(linkedList.tail.value);
// console.log(linkedList.delete(1));
// console.log(linkedList.print());