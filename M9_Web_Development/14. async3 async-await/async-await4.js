const p1 = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve("p1 promise1 resolved...")
    }, 10000)
})
const p2 = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve("p2 promise2 resolved...")
    }, 5000)    
})
async function handlePromise() {
    console.log("before await")
    console.log(new Date())
    
    const val2 = await p2;
    console.log("Create impact 2")
    console.log(val2);
    console.log(new Date())

    const val1 = await p1;
    console.log("Create impact 1")
    console.log(val1);
    console.log(new Date())
}
handlePromise();
/* output:
before await
2025-07-29T18:07:40.271Z
Create impact 2
p2 promise2 resolved...
2025-07-29T18:07:45.277Z
Create impact 1
p1 promise1 resolved...
2025-07-29T18:07:50.266Z
*/