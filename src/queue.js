const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
 
  constructor()
  {
      this.items = [];
      // this.head = null;
  }
  isEmpty()
{
    return this.items.length == 0;
}

  getUnderlyingList() {


    // var str = "";
    // for(var i = 0; i < this.items.length; i++)
    //     str += this.items[i] +" ";
    // return str;
    

    // let current = this.head; // saves a link to the head of the queue

    // while(current) { // goes through each Node of the Queue
    //     // console.log(current.value); // prints the value of the Node in console
    //     current += current.next; // moves link to the next node after head
    // }
    // return current;


    // let string = this.head;
    // // for(let i = 0; i < this.items.length - 1; i++){
    //   string += this.head.value;
    // }
    // return string;

  

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    
    this.items.push(value);
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {

    
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
