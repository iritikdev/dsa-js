import SinglyLinkedList from "./linkedlist/Singly.js";
import DoublyLinkedList from "./linkedlist/Doubly.js";
import Stack from "./Stack.js";
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

stack.pop();

console.log(stack.peek()); // Output: 2

console.log(stack.getSize()); // Output: 2

stack.clear();

console.log(stack.isEmpty()); // Output: true
