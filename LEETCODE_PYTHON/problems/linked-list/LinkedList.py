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
    
    #return last node value
    #remove last node
    def pop(self):
        if self.tail is None:
            return None
        elif self.tail == self.head:
            self.tail = None
            self.head = None
            self.length = 0
            temp_tail = self.tail
            return temp_tail.value
        else:
            temp = self.head
            while temp is not None:
                pre = temp
                temp = temp.next
            self.tail = pre
            self.tail.next = None
            self.length -= 1
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
