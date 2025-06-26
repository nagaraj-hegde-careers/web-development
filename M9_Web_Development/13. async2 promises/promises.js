// let myFirstPromise = new Promise(function(resolve, reject){
//     if(1==1){
//         // success case
//         resolve("Success!");
//     }
//     else {
//         // failed case
//         reject("Failed!");
//     }
// }) 
//*----------x----------x----------x----------x----------x----------*//

//coin toss example with promises

// let promiseFunc = function (res, rej){
// // simulate coin toss delay,
//     setTimeout(function (){
//         const isHeads = Math.random() <= 0.5;
//         if (isHeads) {
//             res("Heads Win!")
//         } else {
//             rej("Tails - (considered fail for this example.)")
//         }
//     }, 1000)
// }
// // creation of a promise
// let coinTossPromise = new Promise(promiseFunc)
// // consume a promise
// coinTossPromise
//     .then(function(result){
//         console.log("In .then block")
//         console.log(result)
//     })
//     .catch(function(err){
//         console.log("In .catch block")
//         console.log(err)
//     })
//     .finally(function(){
//         console.log("Everything is done...")
//     })
//*----------x----------x----------x----------x----------x----------*//

// chaining of promises. cleaning room example
let cleanRoomPromise = function () {
    return new Promise(function (resolve, reject){
        if (Math.random() < 0.5){
            resolve('Cleaned The Room');
        }
        else{
            reject('Failed to clean the room');
        }
    })
}
let makeUpTheCupboardPromise = function (message) {
    return new Promise(function (resolve, reject){
        if (Math.random() < 0.5){
            resolve(message + " made up the cupboard..");
        }
        else {
            reject(message + " failed to make up the cupboard..");
        }
    })
}
let winIceCream = function (message){
    return new Promise(function (resolve, reject){
        resolve(message + " won ice cream!");
    })
}
cleanRoomPromise()
    .then(function (result){
        return makeUpTheCupboardPromise(result);
    })
    .then(function (result){
        return winIceCream(result);
    })
    .then(function (result){
        console.log(result);
    })
    .catch(function (err){
        console.log(err);
    })

