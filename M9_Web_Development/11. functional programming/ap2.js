//function to find the first negative number of array using find method
function findFirstNegative(numbers) {
  
  const finalFindFirstNegative = numbers.find(element => (element<0))
 
  return finalFindFirstNegative

}
console.log(findFirstNegative([1,2,3,-4,-2])) // -4
console.log(findFirstNegative([1,2,3,4,5])) // undefined