import sys
#input => sorted array
#output => 1 number => number of count of unique numbers
def countUniqueValues(arr):
    #short answer!
    # a = set(arr)
    # return len(a)
    
    #long answer!
    if not (arr):
        return 0
    unique_count = 0
    pointer = 0
    last_value = None
    while pointer <= len(arr)-1:
        if (pointer == 0 and (arr[0] != None)):
            last_value = arr[pointer]
            unique_count += 1
            pointer += 1
        elif pointer < len(arr)-1:
            if last_value == arr[pointer]:
                last_value = arr[pointer]
                pointer += 1
            else:
                last_value = arr[pointer]
                unique_count += 1
                pointer += 1
        else: #last value of the array
            last_value = arr[pointer]
            unique_count += 1
            return unique_count

print(f"unique count is", countUniqueValues([1,1,1,1,1,2])) #2
print(f"unique count is",countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) #7
print(f"unique count is",countUniqueValues([])) #0
print(f"unique count is",countUniqueValues([-2,-1,-1,0,1])) #4
