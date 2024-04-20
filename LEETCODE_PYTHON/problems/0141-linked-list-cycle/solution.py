# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        fast_ptr = head
        slow_ptr = head
        # empty LL - edge case
        if fast_ptr is None:
            return None
        # ONE LL - edge case
        else:
            while fast_ptr is not None and fast_ptr.next is not None:
                slow_ptr = slow_ptr.next
                fast_ptr = fast_ptr.next.next
                if fast_ptr == slow_ptr:
                    return True
            return False

