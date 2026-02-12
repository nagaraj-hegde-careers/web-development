function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected fast")), 300);
    });
}

function rejectSlow() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected slow")), 1500);
    })
}

Promise.any([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlow()])
    .then(result => {
        console.log(`Result: ${result}`); // Result: Resolved quickly   
    })
    .catch(error => {
        console.log(`Error: ${error}`);
        if (error instanceof AggregateError) {
            console.log(error.errors);
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1} : , ${err.message}`))
        }
    })

Promise.any([rejectFast(), rejectSlow()])
    .then(result => {
        console.log(`Result : ${result}`); // This will not execute as both promises are rejected
    })
    .catch(error => {
        console.log(`Error : ${error}`);
        // Output:
        // Error : AggregateError: All promises were rejected
        // [
        //     Error: Rejected fast
        //         at Timeout._onTimeout (D:\SD\M9_Web_Development\33. Promise combinators & their Polyfills\any.js:15:33)
        //         at listOnTimeout (node:internal/timers:588:17)
        //         at process.processTimers (node:internal/timers:523:7),
        //     Error: Rejected slow
        //         at Timeout._onTimeout (D:\SD\M9_Web_Development\33. Promise combinators & their Polyfills\any.js:21:33)
        //         at listOnTimeout (node:internal/timers:588:17)
        //         at process.processTimers (node:internal/timers:523:7)
        // ]
        if (error instanceof AggregateError) {
            console.log(error.errors);
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1} : , ${err.message}`))
            // Output:
            // Error 1 : , Rejected fast
            // Error 2 : , Rejected slow
        }
    })