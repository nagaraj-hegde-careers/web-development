function sumOfArray(arr) {
  let sum= 0;
  for (let i=0; i<arr.length; i++){
      sum = sum + arr[i];
  }
 
    return sum
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15