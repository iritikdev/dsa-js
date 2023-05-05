export default class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop the top element from the stack
  pop() {
    if (this.items.length === 0) {
      return null;
    }

    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.items.length;
  }

  // Empty the stack
  clear() {
    this.items = [];
  }
}
