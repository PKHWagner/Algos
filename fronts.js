// add Front
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return newNode;
  }

  removeHead() {
    if (this.head === null) {
      return null;
    }

    const currentHead = this.head;
    this.head = this.head.next;
    return currentHead;
  }

  getHeadValue() {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
  }
}

const SLL1 = new SLL();

// console.log(SLL1.addFront(18));
// console.log(SLL1.addFront(5));
// console.log(SLL1.addFront(73));
// console.log(SLL1.removeHead());
// console.log(SLL1.removeHead());
// console.log(SLL1.removeHead());

SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.getHeadValue());
SLL1.removeHead();
console.log(SLL1.getHeadValue());
SLL1.removeHead();
console.log(SLL1.getHeadValue());
SLL1.removeHead();
console.log(SLL1.getHeadValue());