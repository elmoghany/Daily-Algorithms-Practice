# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        ptr = head
        left_head = ListNode(0)
        right_head = ListNode(0)
        left_tail = left_head
        right_tail = right_head
        
        if ptr is None:
            return None
        while ptr is not None:
            #left
            if ptr.val < x:
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

