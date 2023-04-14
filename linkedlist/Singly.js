class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Singly {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(item) {
    const node = new Node(item);
    if (this.first === null) this.first = this.last = node;
    else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }
}

export default Singly;
