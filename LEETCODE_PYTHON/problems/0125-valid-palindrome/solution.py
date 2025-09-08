import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        pattern = r'[^a-zA-Z0-9]'
        print(s)
        s = re.sub(pattern,"", s).lower()
        print(s)
        left    = 0
        right   = len(s) - 1

        while left < right:
            if s[left] == s[right]:
                #print("s[left]=",s[left])
                #print("s[right]=",s[right])
                #print("-----------")
                left +=1
                right-=1
            else:
                return False
        
        return True
