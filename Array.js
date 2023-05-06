export default class Array {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
      this.length++;
    }
  }

  // Add an element to the end of the array
  push(element) {
    this[this.length] = element;
    this.length++;
  }

  // Remove and return the last element from the array
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const lastElement = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return lastElement;
  }

  // Remove and return the first element from the array
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const firstElement = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;

    return firstElement;
  }

  // Add an element to the beginning of the array
  unshift(element) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + 1] = this[i];
    }
    this[0] = element;
    this.length++;
  }

  // Return the first index at which a given element can be found in the array, or -1 if it is not present
  indexOf(element) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) {
        return i;
      }
    }

    return -1;
  }

  // Return a new array with all elements that pass the test implemented by the provided function
  filter(callback) {
    const filteredArray = new Array();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }

    return filteredArray;
  }

  // Call a provided function on each element of the array, in order
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}
