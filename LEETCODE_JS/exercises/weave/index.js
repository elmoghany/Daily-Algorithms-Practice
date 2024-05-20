// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    let combined_queue = new Queue()
    // let q1 = new Queue(sourceOne)
    // let q2 = new Queue(sourceTwo)
    while((sourceOne.peek() != null) || (sourceTwo.peek() !=null)){
        if(sourceOne.peek()){
            combined_queue.add(sourceOne.remove())
            console.log("combined_queue 1 = ", combined_queue.peek())
        }
        if(sourceTwo.peek()){
            combined_queue.add(sourceTwo.remove())
            console.log("combined_queue 2 = ",combined_queue.peek())
        }
    }
    return combined_queue
}

module.exports = weave;
