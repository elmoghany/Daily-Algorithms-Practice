import sys
from collections import defaultdict

def sameSquared(arr1, arr2):
    if(len(arr1) != len(arr2)):
        return False
    else:
        freq_ctr1 = {}
        freq_ctr2 = {}
        # freq_ctr2 = defaultdict(int)
        
        #freq_ctr1.get(item,0) => 
        #   if item not found, return 0
        for item in arr1:
            freq_ctr1[item] = freq_ctr1.get(item,0) + 1
                    
        #using if else
        for item in arr2:
            if not item in freq_ctr2:
                freq_ctr2[item] = 1
            else:
                freq_ctr2[item] += 1

        #freq_ctr2 = defaultdict(int)
        #   initialize with zero
        #   use dict() to convert to regular dict
        # for item in arr2:
        #     freq_ctr2[item] += 1
        #     print(f'freq_ctr2 = ', dict(freq_ctr2))
        print(f'freq_ctr1 = ', freq_ctr1)
        print(f'freq_ctr2 = ', (freq_ctr2))
        for key in freq_ctr1:
            if freq_ctr2[key**2] == freq_ctr1[key]:
                continue
            else:
                print("False")
                return False
        print("True")
        return True
            
sameSquared([1,2,3,3],[1,4,9,3])