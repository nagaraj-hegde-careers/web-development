const p1 = new Promise (function (resolve, reject) {
    setTimeout (function () {
        resolve ("p1 Promise resolved...")
    }, 10000)
})
const p2 = new Promise (function (resolve, reject) {
    setTimeout (function () {
        resolve ("p2 Promise resolved...")
    }, 5000)
})
async function handlePromise1() {
    console.log ("before await")
    const val1 = await p1;
    console.log ("Create impact 1")
    console.log (val1);

    const val2 = await p2;
    console.log ("Create impact 2")
    console.log (val2);
}
handlePromise1();
/** * Output:
before await // immediately
// after 10s
Create impact 1
p1 Promise resolved...
Create impact 2 // immediately since 10s are passed
p2 Promise resolved...
 */