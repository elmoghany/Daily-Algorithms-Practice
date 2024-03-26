#!/usr/bin/env python
# import sys

def same(arr1, arr2):
    arr3 = []
    len1 = len(arr1)
    len2 = len(arr2)
    len1or2 = 0
    if (len1 == len2):
        len1or2 = 0
        count = len1
    elif (len1 > len2):
        len1or2 = 1
        count = len2
    elif (len1 < len2):
        len1or2 = 2
        count = len1
    else:
        len1or2 = 0
        
    for i in range(count):
        print(arr1[i]*arr2[i])
        if (len1or2 == 0) & (i == count-1):
            print("True")
        elif i == count-1:
            print("Flase")