# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        one_step_ptr = head
        two_step_ptr = head
        # empty LL - edge case
        if one_step_ptr is None:
            return None
        # ONE LL - edge case
        elif one_step_ptr.next is None:
            return head
        else:
            while two_step_ptr is not None and two_step_ptr.next is not None:
                one_step_ptr = one_step_ptr.next
                two_step_ptr = two_step_ptr.next.next
            return one_step_ptr
