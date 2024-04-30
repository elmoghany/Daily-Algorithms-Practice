# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        curr = head
        sum = 0
        i=0
        counter = head
        while counter:
            i += 1
            counter = counter.next

        while curr:
            sum = sum + 2 ** (i-1) * curr.val
            i -= 1
            curr = curr.next
            print("sum = " , sum)
        return sum

