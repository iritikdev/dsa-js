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

  unshift(item) {
    const node = new Node(item);
    if (this.first === null) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this.length++;
  }

  pop() {
    let item = this.last.item;
    if (this.first === null) return undefined;
    let current = this.first;
    while (current.next !== this.last) {
      current = current.next;
    }
    current.next = null;
    this.last = current;
    return item;
  }

  toString() {
    let result = "[ ";
    let current = this.first;
    while (current !== null) {
      result += `${current.item}, `;
      current = current.next;
    }
    result += "]";
    return result;
  }

  shift() {
    if (this.first === null) return undefined;
    const item = this.first.item;

    const second = this.first.next;
    this.first.next = null;
    this.first = second;

    return item;
  }
}

export default Singly;
