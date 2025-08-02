//Example1
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("p1 Promise resolved...")
    },5000)
})
async function handlePromise1(){
    console.log('before await')
    const val1 = await p1;
    console.log("Create impact1")
    console.log(val1);

    const val2 = await p1;
    console.log("Create impact2")
    console.log(val2);
}
handlePromise1();
/* Output:
before await // immediate
// 5s wait
Create impact1
p1 Promise resolved...
Create impact2 
p1 Promise resolved...
*/