//*----------x----------x----------x----------x----------x----------*//
//file system, synchronous way of accessing, example 1
// const fs = require('fs')
// console.log("starting")
// const data1 = fs.readFileSync('file1.txt')
// console.log("data of file1: ", data1.toString())
// const data2 = fs.readFileSync('file2.txt')
// console.log("data of file2: ", data2.toString())
// const content = Math.random().toString(36).repeat(1000000)
// fs.writeFileSync('file3.txt', content)
// console.log("data of file2: ", data2.toString())

//changing the above example to asynchronous
const fs= require('fs')
console.log("starting")
// const content = Math.random().toString(36).repeat(1000000)
// fs.writeFileSync('file3.txt', content)
// const data3 = fs.readFileSync('file3.txt')
// console.log("data of file3", data3.toString())
fs.readFile('file3.txt', (err, data) => { // callback for read
    if (err) {
        console.log("error", err)
    } else {
        console.log("data of file3: ",data)
    }
})
// const data2 = fs.readFileSync('file2.txt')
// console.log("data of file2", data2.toString())
fs.readFile('file2.txt',(err, data) => {
if (err) {
console.log("error", err)
} else {
// console.log("data of file2", data.toString())
console.log("data of file2: ", data.toString())
}
})
console.log("ending")