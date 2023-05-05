import Queue from "./Queue.js";
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

queue.dequeue();

console.log(queue.peek()); // Output: 2

console.log(queue.getSize()); // Output: 2

queue.clear();

console.log(queue.isEmpty()); // Output: true
