//----------x----------x----------x----------x----------x----------//
//reduce function:

//example 1- sum of array elements
// let arr =[1,2,3,4,5]
// let totalSum = arr.reduce(function(accumulator, currentValue){
//     accumulator = accumulator + currentValue;
//     return accumulator;
// },0)
// console.log(totalSum); //15

//example 2- max value
// const numbers = [10, 5, 20, 8, 15];
// const max = numbers.reduce((acc, curr) => Math.max(acc, curr)); //short form of function
// console.log(max); // Output: 20

//example 3- using traditional function
// const numbers = [10, 5, 20, 8, 15];
// const max = numbers.reduce(function(acc, curr){
//   return   Math.max(acc, curr)
    
// });
// console.log(max);

//example 4-
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Tablet", price: 300 },
//   { name: "Phone", price: 800 },
// ];
// const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
// console.log(totalPrice); // Output: 2300