class Queue {
  constructor(){
    this.queue = [];
    }  

  enqueue(elem) {
      this.queue.push(elem);
  }
  
  dequeue(elem) {
      return this.queue.shift();
  }
  
  // check the element at the front of queue without removing it:
  peek() {
      return this.queue[0];
  }
  
}

const myQueue = new Queue();

myQueue.enqueue("deadmau5 - Three Pound Chicken Wing");
myQueue.enqueue("i_o - Ghost in the Machine");
myQueue.enqueue("No Mana - Nostalgia Drive");
myQueue.enqueue("Sysdemes - Astral Evolution");
myQueue.enqueue("D E A T H P A C T - SOOTHSAYER");
myQueue.enqueue("REZZ - Edge");


console.log(myQueue);
console.log("Peek: ", myQueue.peek());

myQueue.dequeue();
console.log(myQueue);