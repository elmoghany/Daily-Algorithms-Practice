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
    size(){
        let count = 0
        let node = this.head
        while(node){
            count ++
            node = node.next
        }
        return count
    }
    getFirst(){
        let node = this.head
        return node
    }
    getLast(){
        if(this.head){
            let node = this.head
            while(node){
                if(node.next == null)
                    return node
                node = node.next
            }
        }else{
            return null
        }
    }
    clear(){
        this.head = null
    }
    removeFirst(){
        if (!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return
        } else if (!this.head.next){
            this.head = null
            return
        } else{
            let prior_node = this.head
            let current_node = prior_node.next
            while(current_node){
                if(current_node.next == null){
                    prior_node.next = null
                    return prior_node
                }
                current_node = current_node.next
                prior_node = prior_node.next
            }
        }
    }
    insertLast(data){
        if(!this.head){
            this.head = new Node(data)
        } else if (!this.head.next){
            this.head.next = new Node(data)
        } else {
            let node = this.head.next
            while(node){
                if(!node.next){
                    node.next = new Node(data)
                }
                node = node.next
            }
        }
    }
    getAt(index){
        if (!this.head){
            return null
        } else {
            let count = 0
            let node = this.head
            while(count <= index){
                if(index == count){
                    return node 
                }
                count++
                node = node.next
            }
        } 
    }
}

module.exports = { Node, LinkedList };

const nodeOne = new Node(5)
const list = new LinkedList()
list.head = nodeOne
list.insertFirst(4)
console.log(list)