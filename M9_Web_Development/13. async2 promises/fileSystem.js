const fs = require('fs')
// // success
// let promiseReadFile = fs.promises.readFile('f1.txt')
// // error
// // let promiseReadFile = fs.promises.readFile('f2121.txt')
// promiseReadFile
//     .then(function(data){
//         console.log("file data ->", data.toString())
//     })
//     .catch(function(error) {
//         console.log("Error:  ->", error)
//     })

// chaining
let promiseReadFile1 = fs.promises.readFile('f1.txt')
let promiseReadFile2 = fs.promises.readFile('f212.txt')
let promiseReadFile3 = fs.promises.readFile('f3.txt')

// //file1
// promiseReadFile1
//     .then(function(data){
//         console.log(`File1 data ${data}`)
//     })
//     .catch(function(err) {
//         console.log("error reading f1", err)
//     })
// //file2
// promiseReadFile2
//     .then(function(data){
//         console.log(`File2 data ${data}`)
//     })
//     .catch(function(err) {
//         console.log(`error reading f2 ${err}`)
//     })
// //file3
// promiseReadFile3
//     .then(function(data){
//         console.log(`File3 data ${data}`)
//     })
//     .catch(function(err) {
//         console.log(`error reading f3 ${err}`)
//     })

function readFileCallback(data) {
    console.log(`File data: ${data.toString()}`);
}
function handleError(err) {
    console.log(`Error reading file: ${err}`);
}
promiseReadFile1.then(readFileCallback).catch(handleError);
promiseReadFile2.then(readFileCallback).catch(handleError);
promiseReadFile3.then(readFileCallback).catch(handleError);