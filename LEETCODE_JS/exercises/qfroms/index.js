// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.mainStack = new Stack();
        this.secondaryStack = new Stack();
    }

    add(record){
        this.mainStack.push(record);
    }

    
    peek(){
        let record
        while(this.mainStack.peek()){
            record = this.mainStack.pop()
            this.secondaryStack.push(record)
        }
        while(this.secondaryStack.peek()){
            this.mainStack.push(this.secondaryStack.pop())
        }
        return record
    }
    
    remove(){
        let record
        while(this.mainStack.peek()){
            record = this.mainStack.pop()
            this.secondaryStack.push(record)
        }
        record = this.secondaryStack.pop()
        while(this.secondaryStack.peek()){
            this.mainStack.push(this.secondaryStack.pop())
        }
        return record
    }
}

module.exports = Queue;
