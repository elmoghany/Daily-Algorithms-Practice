class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left  = null
    }
}
class BST {
    constructor(){
        this.root = null
    }
    insert(value){
        console.log("--------------------------")
        console.log("value to insert = ", value)
        let new_node = new Node(value)
        let current = this.root
        let done = false
        if(this.root === null){
            this.root = new_node
            console.log("root null = ",this.root.value)
            return this
        } else {
            while(!done){
                if(new_node.value < current.value){
                    if(!current.left){
                        current.left = new_node
                        current = current.left
                        console.log("left null = ",current.value)
                        return this
                    } else {
                        console.log("left before = ",current.value)
                        current = current.left
                        console.log("left after = ",current.value)
                    }
                }
                else if (new_node.value > current.value){
                    if(!current.right){
                        current.right = new_node
                        current = current.right
                        console.log("right null = ",current.value)
                        return this
                    } else {
                        console.log("right before = ",current.value)
                        current = current.right
                        console.log("right after = ",current.value)
                    }
                }
            }
        }
    }
}

let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(1)
tree.insert(6)
tree.insert(8)
console.log(tree)
//      10
//  5       13
//2   7  11    16
// tree.root = new Node(10)
// tree.root.right = new Node(13)
// tree.root.left = new Node(5)
// tree.root.left.right = new Node(7)
// tree.root.left.left = new Node(2)
// tree.root.right.right = new Node(16)
// tree.root.right.left = new Node(11)