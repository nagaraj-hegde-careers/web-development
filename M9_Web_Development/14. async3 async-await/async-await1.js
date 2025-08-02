//Example1- Using await to create a promise
// async function getData(){
//     return 'Hello'
// }
// const dataPromise1 = getData()
// dataPromise1.then(function(result){
//     console.log(result)
// })

//*----------x----------x----------x----------x----------x----------*//
// Example2- Using traditional promise
// const p1 = new Promise(function(resolve, reject){
//     resolve("Promise Resolved")
// })
// p1.then(function(result){
//     console.log(result)
// })

//*----------x----------x----------x----------x----------x----------*//
// Example3
// const p2 = new Promise(function(res, rej){
//     res('Promise res')
// })
// async function fetchData1(){
//     return p2;
// }
// const dataPromise2 = fetchData1()
// console.log(dataPromise2) //Promise { <pending> }

// dataPromise2.then(function(result){
//     console.log(result)//Promise res
// })

//*----------x----------x----------x----------x----------x----------*//
// Example4
// const p3 = new Promise(function(res, rej){
//     res('p3 promise resolved')
// })
// async function handlePromise1(){
//     const val1 = await p3;
//     console.log(val1)
// }
// handlePromise1()

// function fetchData2(){
//     p3.then(function(result){
//         console.log(result)
//     })
// }
// fetchData2()

//*----------x----------x----------x----------x----------x----------*//
//Example5- using traditional promise
// const p4 = new Promise(function(resolved, rejected){
//     setTimeout(function(){
//         resolved('p4 promise resolved')
//     },3000)
// })
// function fetchData3(){
//     p4.then(function(result){
//         console.log(result)
//     })
//     console.log('Create impact')
// }
// fetchData3(); //Create impact //p4 promise resolved

//*----------x----------x----------x----------x----------x----------*//
//Example6- using async-await
const p5 = new Promise(function(resolved, rejected){
    setTimeout(function(){
        resolved('p5 promise resolved')
    },3000)
})
async function handlePromise2(){
    console.log('Before await')
    const val2 = await p5;
    console.log(val2)
    console.log('Create impact2')
}
handlePromise2()
console.log('Outside')
/**output
Before await
Outside
p5 promise resolved
Create impact2
 */