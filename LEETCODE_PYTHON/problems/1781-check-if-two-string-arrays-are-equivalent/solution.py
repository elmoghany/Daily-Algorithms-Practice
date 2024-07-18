class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        wordSum1 = ''
        wordSum2 = ''
        for word in word1:
            wordSum1 += word
        for word in word2:
            wordSum2 += word
        if wordSum1 == wordSum2:
            return True
        else:
            return False
