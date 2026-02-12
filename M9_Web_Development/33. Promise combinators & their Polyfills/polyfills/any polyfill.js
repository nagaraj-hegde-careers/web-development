Promise.myany = function (promisesArray) {
    const promise =new Promise((resolve, reject) => {
        let rejectedCount = 0;
        let rejections = [];

        promisesArray.forEach((prom, index) => {
            Promise.resolve(prom)
                .then(resolve) 
                .catch((error) => {
                    rejections[index] = error;
                    rejectedCount++;
                    if (rejectedCount === promisesArray.length) {
                        reject(new AggregateError(rejections, "All promises were rejected"))
                    }
                })
        })
    })
    return promise;
}

// Testcase1
let promises1 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]

Promise.myany(promises1)
    .then(result => console.log(`resolved with: ${result}`)) //resolved with: 1
    .catch(err => console.log(`Rejected with: ${err}`))

// Testcase2
let promises2 = [
    Promise.reject(new Error(`Failed 1`)),
    Promise.reject(new Error(`Failed 2`)),
    Promise.reject(new Error(`Failed 3`))
]

Promise.myany(promises2)
    .then(result => console.log(`Resolved with: ${result}`))
    .catch(error => {
        console.log(`Rejected with: ${error}`) // Rejected with: AggregateError: All promises were rejected
        if (error instanceof AggregateError) {
            console.log(error.errors);
            // [
            //     Error: Failed 1
            //         at Object.<anonymous> (D:\SD\M9_Web_Development\33. Promise combinators & their Polyfills\polyfills\any polyfill.js:34:20)
            //         at Module._compile (node:internal/modules/cjs/loader:1730:14)
            //         at Object..js (node:internal/modules/cjs/loader:1895:10)
            //         at Module.load (node:internal/modules/cjs/loader:1465:32)
            //         at Function._load (node:internal/modules/cjs/loader:1282:12)
            //         at TracingChannel.traceSync (node:diagnostics_channel:322:14)
            //         at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
            //         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
            //         at node:internal/main/run_main_module:36:49,
            //     Error: Failed 2
            //         at Object.<anonymous> (D:\SD\M9_Web_Development\33. Promise combinators & their Polyfills\polyfills\any polyfill.js:35:20)
            //         at Module._compile (node:internal/modules/cjs/loader:1730:14)
            //         at Object..js (node:internal/modules/cjs/loader:1895:10)
            //         at Module.load (node:internal/modules/cjs/loader:1465:32)
            //         at Function._load (node:internal/modules/cjs/loader:1282:12)
            //         at TracingChannel.traceSync (node:diagnostics_channel:322:14)
            //         at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
            //         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
            //         at node:internal/main/run_main_module:36:49,
            //     Error: Failed 3
            //         at Object.<anonymous> (D:\SD\M9_Web_Development\33. Promise combinators & their Polyfills\polyfills\any polyfill.js:36:20)
            //         at Module._compile (node:internal/modules/cjs/loader:1730:14)
            //         at Object..js (node:internal/modules/cjs/loader:1895:10)
            //         at Module.load (node:internal/modules/cjs/loader:1465:32)
            //         at Function._load (node:internal/modules/cjs/loader:1282:12)
            //         at TracingChannel.traceSync (node:diagnostics_channel:322:14)
            //         at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
            //         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
            //         at node:internal/main/run_main_module:36:49
            // ]
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}: , ${err.message}`))
            // Output:
            // Error 1: , Failed 1
            // Error 2: , Failed 2
            // Error 3: , Failed 3
        }
    })