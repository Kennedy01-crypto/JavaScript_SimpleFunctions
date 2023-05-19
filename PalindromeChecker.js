//A function that checks whether a passed String is a Palindrome or not
function IsPalindrome(word){
    if(typeof word == "string" && word !== "" ){
      let word2 = word.toLowerCase();
      let word3 = word2.split("").reverse("").join("");

      if(word3 === word2){
        return `TRUE: The word ${word} is a Palindrome`;
      }
      else(word3 !== word2);{
        return `FALSE: The word ${word} is NOT a Palindrome`;
      }
    }
    else{
      return "Error! NOT a string";
    }  
  }  
  //call the function
  console.log(IsPalindrome("madam"));
  console.log(IsPalindrome("MmadaMm"));
  console.log(IsPalindrome("Joy"));
  console.log(IsPalindrome("11eeye"));
  console.log(IsPalindrome(""));
  console.log(IsPalindrome("otto"));
