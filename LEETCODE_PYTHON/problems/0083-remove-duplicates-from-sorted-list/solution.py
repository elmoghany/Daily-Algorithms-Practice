# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        prev_ptr = None
        unique_list = set()
        
        while curr:
            if curr.val not in unique_list:
                unique_list.add(curr.val)
                prev_ptr = curr
            else:
                prev_ptr.next = curr.next
            curr = curr.next
        return head
        
