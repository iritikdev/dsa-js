class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new node to the end of the list
  addFirst(data) {
    const node = new Node(data);

    if (!this.head) return (this.head = this.tail = node);

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  addLast(data) {
    const node = new Node(data);
    if (!this.head) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  // Insert a new node at a specified position
  insertAt(data, index) {
    if (index < 0 || index > this.size) return false;

    const node = new Node(data);

    if (index === 0) {
      if (!this.head) return (this.head = this.tail = node);
      else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (index === this.size) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
    }

    this.size++;
    return true;
  }

  // Remove a node at a specified position
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;

      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
    return current.data;
  }

  // Remove the first node with the specified data
  remove(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;

          if (!this.head) {
            this.tail = null;
          } else {
            this.head.prev = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;
        return current.data;
      }

      current = current.next;
    }

    return null;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }

    return -1;
  }
}

export default DoublyLinkedList;
