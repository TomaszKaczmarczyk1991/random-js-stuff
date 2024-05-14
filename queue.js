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
}