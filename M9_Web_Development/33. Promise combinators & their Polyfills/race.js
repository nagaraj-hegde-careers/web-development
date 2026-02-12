function quickResolve(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Quickly resolved"), 500);
    });
}

function slowResolveOrFastReject() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve("slowly resolved"), 2000);
        setTimeout(() => reject(new Error("Quickly rejected")), 100); // Error:  Error: Quickly rejected
    })
}

Promise.race([quickResolve(), slowResolveOrFastReject()])
    .then(result => {
        console.log("result: ", result)
    })
    .catch(error => {
        console.log("Error: ", error)
    })
