let inputString="hello";
console.log(inputString);


function reverseString(inputString){
    let charArray = inputString.split("");
    // console.log(charArray);
    
    charArray.reverse();
    // console.log(charArray);
    
   let reversedString = charArray.join("");
    // console.log(reversedString);
    
    return reversedString;
}

console.log(reverseString(inputString));