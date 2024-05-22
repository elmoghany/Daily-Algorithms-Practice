// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []){
        this.data = data
        this.children = children
    }

    add(data){
        const node = new Node(data)
        this.children.push(node)
    }

    remove(data){
        this.children = this.children.filter( node =>{
            return node.data !== data
        } )
    }
}

class Tree {
    constructor(){
        this.root = null
    }
    traverseBF(fn){
        let current_node = this.root
        let current_data = []
        let visited = []
        current_data.push(current_node)
        while(current_data.length){
            current_node = current_data.shift()
            visited.push(current_node)
            if(current_node.children) current_data.push(...current_node.children)
            
            //this is redundant!!! not needed!
            fn(current_node)
        }
    }
//      10
//  5       15
//2   6  12    20
    traverseDF(fn){
        let current_node = this.root
        let current_data = []
        let visited = []
        current_data.push(current_node)
        while(current_data.length){
            current_node = current_data.shift()
            visited.push(current_node)
            if(current_node.children) current_data.unshift(...current_node.children)

            //this is redundant!!! not needed!
            fn(current_node)
        }
    }

}

// //usage
// const node = new Node(1)
// const tree = new Tree()
// tree.root = node

module.exports = { Tree, Node };



// traverseBF(fn){
//     const arr = [this.root]
//     while(arr.length){
//         const node = arr.shift()
//         arr.push(...node.children)
        
//         fn(node)
//     }
// }
// traverseDF(fn){
//     const arr = [this.root]
//     while(arr.length){
//         const node = arr.shift()
//         arr.unshift(...node.children)
        
//         fn(node)
//     }

// }