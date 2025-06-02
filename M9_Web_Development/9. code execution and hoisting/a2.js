function findMaxValue(arr) {
    let maxValue = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i];
        }
    }
  return maxValue
}
console.log(findMaxValue([1, 4, 2, 7, 5])); // Output: 7

