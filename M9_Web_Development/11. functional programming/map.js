//----------x----------x----------x----------x----------x----------//
//find square of each number in an array

//method 1
// let arr = [1, 2, 3, 4, 5];
// let squareArr=[];
// for (let i=0; i < arr.length; i++){
//     squareArr.push(arr[i] * arr[i]);
// }
// console.log(squareArr); // [1, 4, 9, 16, 25]

//method 2 using function
// let arr = [1, 2, 3, 4, 5];
// function squareArrFn(arr){
//     let squareArr = [];
//     for (let i=0; i <arr.length; i++){
//         squareArr.push(arr[i]*arr[i]);
//     }
//     return squareArr;
// }
// let squareArrFinal =squareArrFn(arr)
// console.log(squareArrFinal) // [1, 4, 9, 16, 25]
//----------x----------x----------x----------x----------x----------//

//method 3 using map
// let arr = [1, 2, 3, 4, 5];
// let squareArr = arr.map(function(num){
//     return num * num;
// })
// console.log(squareArr); // [1, 4, 9, 16, 25]

// example 2- convert transaction amounts from INR to USD
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrToUsd = 80;

// let dollarValues = transactions.map(function(amount){
//     return amount / inrToUsd;
// })
// console.log(dollarValues);
//----------x----------x----------x----------x----------x----------//

