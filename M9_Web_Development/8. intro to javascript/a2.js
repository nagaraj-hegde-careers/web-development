function calculateArea(radius){
  // Write your code here
  let circleArea = (Math.PI * Math.pow(radius,2)).toFixed(1);
  let lastDigit=circleArea.split(".");
  if (lastDigit[1]<5){
      return lastDigit[0];
  }
  // return the result
    return circleArea
}
console.log(calculateArea(5)); // 78.5
console.log(calculateArea(10)); // 314
console.log(calculateArea(2.5)); // 19.6