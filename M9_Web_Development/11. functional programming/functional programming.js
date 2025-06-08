//*----------x----------x----------x----------x----------x----------*//
//callback function:

//example 1
// function printName(fn1, fn2){
//     console.log("Name is "+"Nagaraj")
//     fn1()
//     fn2()
// }
// function printAge(){
//     console.log("age is "+34)
// }
// function printProfession(){
//     console.log("Profession is "+"software engineer")
// }
// printName(printAge, printProfession)

//example 2- passing armguments to callback function
// function greet(name){
//     return `Hello, ${name}. `;
// }
// function fareWell(name){
//     return `Goodbye, ${name}`;
// }
// function createSalutation(name, fn1, fn2){
//     console.log(fn1(name),fn2(name))
// }
// createSalutation("Nagaraj", greet, fareWell);
//*----------x----------x----------x----------x----------x----------*//

// impure function:

// //example 1-
// var c=0;
// function sum(a,b){
//     return a+b+c++;
// }
// console.log(sum(2,3)) // Output: 5
// console.log(sum(2,3)) // Output: 6

//example 2-
// function getRandomNumber() {
// return Math.random(); // Returns a new random number each time
// }
// console.log(getRandomNumber());
// console.log(getRandomNumber());

//example 3-
// function updateProfile(profile) {
// profile.lastUpdated = new Date(); // Modifies the object passed in
// return profile;
// }
// const userProfile = { name: "Jane Doe", lastUpdated: new Date('2024-03-07') };
// console.log(updateProfile(userProfile));
//*----------x----------x----------x----------x----------x----------*//

// pure function:

//examle 1-
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3)) // Output: 5
// console.log(sum(2,3)) // Output: 5

//example 2-
// function calculateAge(birthYear){
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }
// console.log(calculateAge(1991)); // output:34
// console.log(calculateAge(1991)); // output:34
//*----------x----------x----------x----------x----------x----------*//

//context of higher order function:

//example calculate circle area, circumference, diameters of the radius array
// let radiusArr =[1,2,3,4];
// function calculateArea(radiusArr){
//     let result = [];
//     for (let i=0; i < radiusArr.length; i++){
//         result.push((3.14 * radiusArr[i]*radiusArr[i]).toFixed(2));
//     }
//     return result;
// }
// function calculateCircumference(radiusArr){
//     let result = [];
//     for (let i=0; i< radiusArr.length; i++){
//         result.push((2 * Math.PI * radiusArr[i] ).toFixed(1));
//     }
//     return result;
// }
// function calculateDiameter(radiusArr){
//     let result =[];
//     for (let i=0; i < radiusArr.length; i++){
//         result.push(2* radiusArr[i])
//     }
//     return result;
// }

// const finalAreas= calculateArea(radiusArr);
// console.log("Final areas ==", finalAreas); //Final areas == [ '3.14', '12.56', '28.26', '50.24' ]

// const finalCircumference=calculateCircumference(radiusArr);
// console.log("Final circumferences ==", finalCircumference); //Final circumferences == [ '6.3', '12.6', '18.8', '25.1' ]

// const finalDiameters=calculateDiameter(radiusArr);
// console.log("Final diameters ==", finalDiameters); //Final diameters == [ 2, 4, 6, 8 ]

// other way to do the same thing using higher order function:
// let radiusArr = [1, 2, 3, 4];
// function circleArea(radius){
//     return (Math.PI * radius * radius).toFixed(2)
// }
// function circleCircumference(radius){
//     return (2 * Math.PI * radius).toFixed(2)
// }
// function circleDiameter(radius){
//     return (2 * radius)
// }

// function calculate(radiusArr, logicFn){
//     let result =[];
//     for (let i=0; i <radiusArr.length; i++){
//         const value = logicFn(radiusArr[i]);
//         result.push(value);
//     }
//     return result;
// }

// console.log("Circle Areas: " + calculate(radiusArr, circleArea)); // Circle Areas: 3.14, 12.57, 28.27, 50.27
// console.log("Circle Circumferences: " + calculate(radiusArr, circleCircumference)); // Circle Circumferences: 6.28, 12.57, 18.85, 25.13
// console.log("Circle Diameters: " + calculate(radiusArr, circleDiameter)); // Circle Diameters: 2, 4, 6, 8
//*----------x----------x----------x----------x----------x----------*//

// function fn(){
//     let a=2;
//     if(true){
//         let a= 1;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn();

// function fn2(){
//     console.log(a) //undefined
//     if(true){
//         var a=1;
//         console.log(a); //1
//     }
//     console.log(a); //1 since var is function scoped
// }
// fn2();
// console.log(a); // ReferenceError: a is not defined