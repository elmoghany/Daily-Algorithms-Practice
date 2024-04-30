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
    
    def set_value(self, index, value):
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False
        
    #create node
    #insert node at index
    def insert(self, index, value):
        if ((index < 0) or (index > self.length)):
            return False
        elif index == 0:
            return self.prepend(value)
        elif (index == (self.length-1)):
            return self.append(value)
        else:
            new_node = Node(value)
            pre_temp = self.get(index-1)
            new_node.next = pre_temp.next
            pre_temp.next = new_node
            self.length += 1
            return True
    ################################
    ################################
    def remove(self, index):
        if (index < 0 or index >= self.length):
            return None
        elif index == 0:
            return self.pop_first()
        elif (index == (self.length - 1)):
            return self.pop()
        else:
            pre_temp = self.get(index - 1)
            temp = pre_temp.next
            pre_temp.next = temp.next
            temp.next = None
            self.length -= 1
            return temp
            
    #COMMON INTERVIEW QUESTION
    def reverse(self):
        temp_tail = self.head
        self.head = self.tail
        self.tail = temp_tail
        after = temp_tail.next
        before = None
        for _ in range(self.length):
            after = temp_tail.next
            temp_tail.next = before
            before = temp_tail
            temp_tail = after
    
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    def find_middle_node(self):
        one_step_ptr = self.head
        two_step_ptr = self.head
        # empty LL - edge case
        if one_step_ptr is None:
            return None
        # ONE LL - edge case
        elif one_step_ptr.next is None:
            return self.head
        else:
            while two_step_ptr is not None and two_step_ptr.next is not None:
                one_step_ptr = one_step_ptr.next
                two_step_ptr = two_step_ptr.next.next
            return one_step_ptr
            
    def has_loop(self):
        fast_ptr = self.head
        slow_ptr = self.head
        # empty LL - edge case
        if fast_ptr is None:
            return False
        else:
            while fast_ptr is not None and fast_ptr.next is not None:
                slow_ptr = slow_ptr.next
                fast_ptr = fast_ptr.next.next
                if fast_ptr == slow_ptr:
                    return True
            return False
     
    def partition_list(self, x):
        ptr = self.head
        left_head = Node(0)
        right_head = Node(0)
        left_tail = left_head
        right_tail = right_head
        
        if ptr is None:
            return None
        while ptr is not None:
            #left
            if ptr.value < x:
                left_tail.next = ptr
                left_tail = left_tail.next
            #right
            else:
                right_tail.next = ptr
                right_tail = right_tail.next
            ptr = ptr.next
        left_tail.next = right_head.next
        right_tail.next = None
        return left_head.next
        
    def remove_duplicates(self):
        curr = self.head
        prev_ptr = self.head
        unique_list = set()
        
        while curr:
            if curr.value not in unique_list:
                unique_list.add(curr.value)
                print("ptr value", curr.value)
                prev_ptr = curr
            else:
                prev_ptr.next = curr.next
            curr = curr.next
            
    def binary_to_decimal(self):
        curr = self.head
        sum = 0
        i=1
        while curr:
            sum = sum + 2 ** (self.length-i) * curr.value
            i += 1
            curr = curr.next
            print("sum = " , sum)
        return sum
            
    def reverse_between(self):
        pass
    
def find_kth_from_end(ll, k):
    fast_ptr = ll.head
    slow_ptr = ll.head
    
    for _ in range(k):
        if fast_ptr is None:
            return None
        fast_ptr = fast_ptr.next
    
    while fast_ptr:
        slow_ptr = slow_ptr.next                    
        fast_ptr = fast_ptr.next                    
    return slow_ptr


linked_list = LinkedList(1)
linked_list.append(0)
linked_list.append(1)
 
# Convert binary to decimal
print(linked_list.binary_to_decimal())  # Output: 5
 
# Create a linked list for binary number 1101
linked_list = LinkedList(1)
linked_list.append(1)
linked_list.append(0)
linked_list.append(1)
 
# Convert binary to decimal
print(linked_list.binary_to_decimal())  # Output: 13

    
###########################################
###########################################
###########################################
###########################################
###########################################
###########################################




# def check(expect, actual, message):
#     print(message)
#     print("EXPECTED:", expect)
#     print("RETURNED:", actual)
#     print("PASS" if expect == actual else "FAIL", "\n")

# print("\n----- Test: Pop on linked list with one node -----\n")
# linked_list = LinkedList(1)
# linked_list.print_list()
# popped_node = linked_list.pop()
# check(1, popped_node.value, "Value of popped node:")
# check(None, linked_list.head, "Head of linked list:")
# check(None, linked_list.tail, "Tail of linked list:")
# check(0, linked_list.length, "Length of linked list:")

# print("\n----- Test: Pop on linked list with multiple nodes -----\n")
# linked_list = LinkedList(1)
# linked_list.append(2)
# linked_list.append(3)
# linked_list.print_list()
# popped_node = linked_list.pop()
# check(3, popped_node.value, "Value of popped node:")
# check(1, linked_list.head.value, "Head of linked list:")
# check(2, linked_list.tail.value, "Tail of linked list:")
# check(2, linked_list.length, "Length of linked list:")

# print("\n----- Test: Pop on empty linked list -----\n")
# linked_list = LinkedList(1)
# linked_list.head = None
# linked_list.tail = None
# linked_list.length = 0
# popped_node = linked_list.pop()
# check(None, popped_node, "Popped node from empty linked list:")
# check(None, linked_list.head, "Head of linked list:")
# check(None, linked_list.tail, "Tail of linked list:")
# check(0, linked_list.length, "Length of linked list:")

# print("\n----- Test: Pop all -----\n")
# linked_list = LinkedList(1)
# linked_list.append(2)
# linked_list.print_list()
# popped_node = linked_list.pop()
# check(2, popped_node.value, "Value of popped node (first pop):")
# check(1, linked_list.head.value, "Head of linked list (after first pop):")
# check(1, linked_list.tail.value, "Tail of linked list (after first pop):")
# check(1, linked_list.length, "Length of linked list (after first pop):")
# popped_node = linked_list.pop()
# check(1, popped_node.value, "Value of popped node (second pop):")
# check(None, linked_list.head, "Head of linked list (after second pop):")
# check(None, linked_list.tail, "Tail of linked list (after second pop):")
# check(0, linked_list.length, "Length of linked list (after second pop):")
# popped_node = linked_list.pop()
# check(None, popped_node, "Popped node from empty linked list (third pop):")
# check(None, linked_list.head, "Head of linked list (after third pop):")
# check(None, linked_list.tail, "Tail of linked list (after third pop):")
# check(0, linked_list.length, "Length of linked list (after third pop):")



# my_linked_list = LinkedList(2)
# my_linked_list.append(1)


# # (2) Items - Returns 2 Node
# print(my_linked_list.pop_first().value)
# # (1) Item -  Returns 1 Node
# print(my_linked_list.pop_first().value)
# # (0) Items - Returns None
# print(my_linked_list.pop_first())



# """
#     EXPECTED OUTPUT:
#     ----------------
#     2
#     1
#     None

# """




# my_linked_list = LinkedList(11)
# my_linked_list.append(3)
# my_linked_list.append(23)
# my_linked_list.append(7)

# print('LL before set_value():')
# my_linked_list.print_list()

# my_linked_list.set_value(1,4)

# print('\nLL after set_value():')
# my_linked_list.print_list()



# """
#     EXPECTED OUTPUT:
#     ----------------
#     LL before set_value():
#     11
#     3
#     23
#     7

#     LL after set_value():
#     11
#     4
#     23
#     7
# """


# my_linked_list = LinkedList(1)
# my_linked_list.append(2)
# my_linked_list.append(3)
# my_linked_list.append(4)
# my_linked_list.append(5)

# print('LL before remove():')
# my_linked_list.print_list()

# print('\nRemoved node:')
# print(my_linked_list.remove(2).value)
# print('LL after remove() in middle:')
# my_linked_list.print_list()

# print('\nRemoved node:')
# print(my_linked_list.remove(0).value)
# print('LL after remove() of first node:')
# my_linked_list.print_list()

# print('\nRemoved node:')
# print(my_linked_list.remove(2).value)
# print('LL after remove() of last node:')
# my_linked_list.print_list()



"""
    EXPECTED OUTPUT:
    ----------------
    LL before remove():
    1
    2
    3
    4
    5

    Removed node:
    3
    LL after remove() in middle:
    1
    2
    4
    5

    Removed node:
    1
    LL after remove() of first node:
    2
    4
    5

    Removed node:
    5
    LL after remove() of last node:
    2
    4

"""

################################################################
# find_middle_node
# my_linked_list2 = LinkedList(1)
# my_linked_list2.append(2)
# my_linked_list2.append(3)
# my_linked_list2.append(4)
# my_linked_list2.append(5)
# # 1 -> 2 -> 3 -> 4 -> 5
# print("##########################")
# my_linked_list2.print_list()
# print(f"middle node =>  {my_linked_list2.find_middle_node().value}" )



"""
    EXPECTED OUTPUT:
    ----------------
    3
    
"""
