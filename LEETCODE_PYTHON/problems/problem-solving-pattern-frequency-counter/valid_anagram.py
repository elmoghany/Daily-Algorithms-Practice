import sys

def validAnagram(word1, word2):
    
    freq_ctr1 = {}
    for letter in word1:
        freq_ctr1[letter] = freq_ctr1.get(letter,0) + 1   
        
    freq_ctr2 = {}
    for letter in word2:
        freq_ctr2[letter] = freq_ctr2.get(letter,0) + 1   
    
    # if freq_ctr1 == freq_ctr2:
    #     print("True 1")
    #     return True
    # else:
    #     print("False 1")
    #     return False
    
    if (freq_ctr1.keys() != freq_ctr2.keys()):
        print("False 1")
        return False
        
    if (freq_ctr1.items() != freq_ctr2.items()):
        print("False 2")
        return False
    
    if (freq_ctr1.keys() == freq_ctr2.keys()) and (freq_ctr1.items() == freq_ctr2.items()):
        print("True 2")
        return True
    
    # for letter in freq_ctr1:
    #     if freq_ctr1[letter] == freq_ctr2[letter]:
    #         continue
    #     else:
    #         return False
    # return True
        
validAnagram("cinema", "iceman")
validAnagram("","")
validAnagram("aaz","zza")
validAnagram("anagram","nagaram")
validAnagram("rat","car")
validAnagram("awesome","awesom")
validAnagram("qwerty","qeywrt")
validAnagram("texttwisttime","timetwisttext")
