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
        #length = 0
        if self.length == 0: 
            return None
        #length = 1
        elif self.head == self.tail:
            temp_tail = self.tail
            self.tail = None
            self.head = None
            self.length = 0
            return temp_tail
        else:
            temp = self.head
            #while (temp.next):
            while temp.next:
                pre = temp
                temp = temp.next
            self.tail = pre
            self.tail.next = None
            self.length -= 1
            if self.length == 0:
                self.head = None
                self.tail = None
            return temp
        
    #create node
    #add node to the beginning
    def prepend(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            self.length += 1
        elif self.length == 1:
            self.head = new_node
            self.head.next = self.tail
            self.length += 1
        else:
            temp_head = self.head
            self.head = new_node
            self.head.next = temp_head
            self.length += 1
        return True
            
    def pop_first(self):
        if self.length == 0:
            return None
        else:
            pop_head = self.head
            self.head = self.head.next
            pop_head.next = None
            self.length -= 1 
            if self.length == 0:
                self.tail = None
            return pop_head
    
    def get(self, index):
        if (index > self.length-1) or (index < 0):
            return None
        elif (index == (self.length-1)):
            return self.tail
        elif index == 0:
            return self.head
        else:
            temp = self.head
            for _ in range(index):
                temp = temp.next
            return temp
        
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


###########################################
###########################################
###########################################
###########################################
###########################################
###########################################





def check(expect, actual, message):
    print(message)
    print("EXPECTED:", expect)
    print("RETURNED:", actual)
    print("PASS" if expect == actual else "FAIL", "\n")

print("\n----- Test: Pop on linked list with one node -----\n")
linked_list = LinkedList(1)
linked_list.print_list()
popped_node = linked_list.pop()
check(1, popped_node.value, "Value of popped node:")
check(None, linked_list.head, "Head of linked list:")
check(None, linked_list.tail, "Tail of linked list:")
check(0, linked_list.length, "Length of linked list:")

print("\n----- Test: Pop on linked list with multiple nodes -----\n")
linked_list = LinkedList(1)
linked_list.append(2)
linked_list.append(3)
linked_list.print_list()
popped_node = linked_list.pop()
check(3, popped_node.value, "Value of popped node:")
check(1, linked_list.head.value, "Head of linked list:")
check(2, linked_list.tail.value, "Tail of linked list:")
check(2, linked_list.length, "Length of linked list:")

print("\n----- Test: Pop on empty linked list -----\n")
linked_list = LinkedList(1)
linked_list.head = None
linked_list.tail = None
linked_list.length = 0
popped_node = linked_list.pop()
check(None, popped_node, "Popped node from empty linked list:")
check(None, linked_list.head, "Head of linked list:")
check(None, linked_list.tail, "Tail of linked list:")
check(0, linked_list.length, "Length of linked list:")

print("\n----- Test: Pop all -----\n")
linked_list = LinkedList(1)
linked_list.append(2)
linked_list.print_list()
popped_node = linked_list.pop()
check(2, popped_node.value, "Value of popped node (first pop):")
check(1, linked_list.head.value, "Head of linked list (after first pop):")
check(1, linked_list.tail.value, "Tail of linked list (after first pop):")
check(1, linked_list.length, "Length of linked list (after first pop):")
popped_node = linked_list.pop()
check(1, popped_node.value, "Value of popped node (second pop):")
check(None, linked_list.head, "Head of linked list (after second pop):")
check(None, linked_list.tail, "Tail of linked list (after second pop):")
check(0, linked_list.length, "Length of linked list (after second pop):")
popped_node = linked_list.pop()
check(None, popped_node, "Popped node from empty linked list (third pop):")
check(None, linked_list.head, "Head of linked list (after third pop):")
check(None, linked_list.tail, "Tail of linked list (after third pop):")
check(0, linked_list.length, "Length of linked list (after third pop):")



my_linked_list = LinkedList(2)
my_linked_list.append(1)


# (2) Items - Returns 2 Node
print(my_linked_list.pop_first().value)
# (1) Item -  Returns 1 Node
print(my_linked_list.pop_first().value)
# (0) Items - Returns None
print(my_linked_list.pop_first())



"""
    EXPECTED OUTPUT:
    ----------------
    2
    1
    None

"""
