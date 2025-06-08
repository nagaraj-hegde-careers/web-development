//function to return sum of an array using reduce
function sumArray(numbers) {
 
  let totalSumArray = numbers.reduce((acc, curr) => (acc+curr),0)
  
  return totalSumArray
}
console.log(sumArray([1,2,3,4])) //10