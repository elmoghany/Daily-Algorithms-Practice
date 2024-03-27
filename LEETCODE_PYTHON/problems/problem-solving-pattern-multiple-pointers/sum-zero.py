import sys

def sumZero(arr):
    #return the first pair that sum zero
    left = 0
    right = len(arr) - 1
    while left < right:
        sum = arr[left] + arr[right]
        if sum == 0:
            return [arr[left], arr[right]]  
        elif sum > 0:
            right -= 1
        else:
            left += 1      

#takes a sorted array only
print(sumZero([-3,-2,-1,0,1,2,3])) #[-3,3]
print(sumZero([-2,0,1,3])) #undefined
print(sumZero([1,2,3])) #undefined