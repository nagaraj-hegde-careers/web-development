//*----------x----------x----------x----------x----------x----------*//
//example 1, output:
// D:\SD\M9_Web_Development\12. async1 callbacks>node eventLoop.js
// starting
// ending
// timer2
// timer1
console.log("starting")
setTimeout(() => {
    console.log("timer1")
}, 10)
setTimeout(() => {
    console.log("timer2")
}, 0)
console.log("ending")