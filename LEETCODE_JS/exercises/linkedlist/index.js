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
            return null
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
            let node = this.head
            while(node){
                if(!node.next){
                    node.next = new Node(data)
                    return
                }
                node = node.next
            }
        }
    }
    getAt(index){
        let node = this.head
        let count = 0
        while(node && count <= index){
            if(index === count){
                return node
            }
            count++
            node = node.next
        }
        return null
    }
    removeAt(index){
        if(!this.head){
            return
        } 
        if(index == 0){
            this.head = this.head.next
            return
        }

        let prior_node = this.getAt(index-1)
        if(!prior_node){
            return
        } else if (!prior_node.next) {
            return
        } else {
            prior_node.next = prior_node.next.next
        }
    }
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data)
            return
        }
        if(index == 0){
            this.insertFirst(data)
            return
        }
        let prior_node = this.getAt(index-1)
        if(!prior_node) {
            this.insertLast(data,index)
        } else if(!prior_node.next){ //add to last node
            this.insertLast(data,index)
        } else {
            let inserted_node = new Node(data, prior_node.next)
            prior_node.next = inserted_node
        }
    }
}

module.exports = { Node, LinkedList };

// const nodeOne = new Node(5)
// const list = new LinkedList()
// list.head = nodeOne
// list.insertFirst(4)
// console.log(list.getAt(0))
// console.log(list.getAt(1))