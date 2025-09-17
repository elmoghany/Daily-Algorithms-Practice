class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers)-1
        sum = 0.1

        while sum != target:
            sum = numbers[left] + numbers[right]
            #print(f'left={numbers[left]}, right={numbers[right]}')
            #print(f'sum={sum}, target={target}')
            #print("-------------------")
            if sum == target:
                return [left+1,right+1]
            elif sum > target:
                right -= 1
            elif sum < target:
                left += 1

