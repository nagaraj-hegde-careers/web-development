//function to double the array element values using map method
function doubleValues(numbers) {

  let finalDoubleValues = numbers.map(element => element*2)
 
  return finalDoubleValues;

}
console.log(doubleValues([1,2,3,4])) //[ 2, 4, 6, 8 ]