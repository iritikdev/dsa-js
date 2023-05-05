export default class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove the first element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }

    return this.items.shift();
  }

  // Return the first element in the queue without removing it
  peek() {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  getSize() {
    return this.items.length;
  }

  // Empty the queue
  clear() {
    this.items = [];
  }
}
