class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addLast(item) {
    const node = new Node(item);
    if (this.head === null) return (this.head = this.tail = node);

    this.tail.next = node;
    this.tail = node;

    this.size++;
  }

  addFirst(item) {
    const node = new Node(item);
    if (this.head === null) return (this.head = this.tail = node);

    node.next = this.head;
    this.head = node;

    this.size++;
  }

  removeLast() {
    let item = this.tail.item;
    if (this.head === null) return undefined;
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    return item;
  }

  toString() {
    let result = "[ ";
    let current = this.head;
    while (current !== null) {
      result += `${current.item}, `;
      current = current.next;
    }
    result += "]";
    return result;
  }

  removeFirst() {
    if (this.head === null) return undefined;
    const item = this.head.item;

    const second = this.head.next;
    this.head.next = null;
    this.head = second;

    return item;
  }
  // Convert the list to an array
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.item);
      current = current.next;
    }

    return arr;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}

export default SinglyLinkedList;
