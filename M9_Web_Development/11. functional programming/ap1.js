//function to check if all elements in the arrray are positive
function allPositive(numbers) {
  
  const finalAllPositive = numbers.every(element => element>0)
 
  return finalAllPositive;
}
console.log(allPositive([1,2,3,4])) // true
console.log(allPositive([1,2,-3,4])) //false