function findLongestWord(str) {
  // Write your code here
  let newStrArry=str.split(" ")
  let longestWord="";
  for(let i=0;i<newStrArry.length; i++){
      if(longestWord.length < newStrArry[i].length){
          longestWord=newStrArry[i]
      }
  }
  // return the result
  return longestWord

}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("I love programming in JavaScript")); // Output: "programming"