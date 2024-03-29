import sys

def maxSubarraySum(arr, num):
    temp_sum = 0
    max_sum = 0
    if num > len(arr):
        return None
    else:
        for i in range(num):
            max_sum += arr[i]
        temp_sum = max_sum
        for i in range(num,len(arr)):
            temp_sum = temp_sum - arr[i-num] + arr[i]
            max_sum = max(temp_sum, max_sum)
    return max_sum
print(maxSubarraySum([1,2,5,2,8,1,5],2)) #10
print(maxSubarraySum([1,2,5,2,8,1,5],4)) #17
print(maxSubarraySum([4,2,1,6],1)) #6
print(maxSubarraySum([4,2,1,6,2],4)) #13
print(maxSubarraySum([],4)) #None