// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
}

module.exports = { Node, LinkedList };

const nodeOne = new Node(5)
const list = new LinkedList()
list.head = nodeOne
list.insertFirst(4)
console.log(list)