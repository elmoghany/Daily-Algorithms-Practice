class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList:
    #create node
    #initialize new node
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1
        
    #create node
    #add node to the end
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node        
            self.tail = new_node
        self.length += 1
        return True
        
    #create node
    #add node to the beginning
    def prepend(self, value):
        pass
    #create node
    #insert node at index
    def insert(self, index, value):
        pass
    ################################
    ################################
    def remove(self, index, value):
        pass
    
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next
