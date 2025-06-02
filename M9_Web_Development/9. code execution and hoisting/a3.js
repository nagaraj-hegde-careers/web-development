function isPalindrome(str) {
    let originalStr=str.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    let originalStrSplit=originalStr.split("")
    let reversedStrSplit=originalStrSplit.reverse()
    let reversedStr= reversedStrSplit.join("")
    if(originalStr==reversedStr){
        return true;
    }
    return false

}
console.log(isPalindrome("Was it a car, or a cat. I saw?")); // true

// [] defines a character set
// ^ inside [] means "not"
// A-Z means any uppercase letter from A to Z
// a-z means any lowercase letter from a to z
// 0-9 means any digit
// /g means global (replace all occurrences, not just first)
// So replace(/[^A-Za-z0-9]/g, '') means: "Replace anything that is NOT a letter or number with an empty string"

// return str.toUpperCase() === str.toUpperCase().split("").reverse().join("");