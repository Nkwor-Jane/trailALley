class Queue{
    constructor(){
        this.count = 0; //check size of queue
        this.firstItem = 0; // know first element
        this.items = {}; //object to store our elements
    }

    enqueue(elem){
        this.items[this.count] = elem;
        this.count++;
    }
}

const queue = new Queue();
queue.enqueue('Item 1');
queue.enqueue('Item 2');

// console.log(queue.items[0]);
