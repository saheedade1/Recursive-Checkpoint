function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    word = word.toLowerCase();
    
    // Reverse the word using the split-reverse-join method
    const reversedWord = word.split('').reverse().join('');
    
    // Compare the original word with the reversed word
    return word === reversedWord;
  }
  
  // Test cases
  console.log(isPalindrome("gag"));     // true
  console.log(isPalindrome("kayak"));   // true
  console.log(isPalindrome("php"));     // true
  console.log(isPalindrome("radar"));   // true
  console.log(isPalindrome("hello"));   // false
  