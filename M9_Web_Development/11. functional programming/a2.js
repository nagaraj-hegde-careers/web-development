//function to filter out odd numbers of array using a filter method
function filterOutOdd(numbers) {

  let finalFilterOutOdd = numbers.filter(element => (element%2 ===0)); 

  return finalFilterOutOdd;

}
console.log(filterOutOdd([1,2,3,4,5])); //[2,4]