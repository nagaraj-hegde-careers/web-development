// Polyfill for Array.prototype.reduce() - adds reduce functionality if it doesn't exist
// if (!Array.prototype.reduce) {
    Array.prototype.myReduceMethod = function (callbackFn, initialValue) {
        // Validate callback - must be a function
        if (typeof callbackFn !== 'function') {
            throw new TypeError(callbackFn + 'must be a function'); // Fixed typo here
        }
        var originalArr = this;
        console.log("originalArr", originalArr); // Debug: shows array
        console.log("arguments", arguments); // Debug: shows args object

        // EDGE CASE: Empty array with no initial value throws error
        // Native reduce behavior: [].reduce(cb) → TypeError
        if (originalArr.length === 0 && arguments.length === 1) {
            throw new TypeError("Reduce of empty array with no initial value");
        }

         // INITIAL VALUE LOGIC (matches native reduce exactly):
        // Case 1: initialValue provided → accumulator = initialValue, start at index 0
        // Case 2: No initialValue → accumulator = first element, start at index 1
        var accumulator = arguments.length >= 2 ? initialValue : originalArr[0];
        var startIndex = arguments.length >= 2 ? 0 : 1; 

        // Iterate from startIndex to array.length-1
        for (var i = startIndex; i <originalArr.length; i++) {
            // SPARSE ARRAY HANDLING: Skip holes (i not in array)
            if (i in originalArr) {
                // callbackFn(accumulator, currentValue, index, originalArray)
                accumulator = callbackFn(accumulator, originalArr[i], i, originalArr);
            }
            // Holes are SKIPPED (no effect on accumulator)
        }
        return accumulator;
    }
// }

const el1 = [1, 2, 3, 4].reduce((acc, cur) => acc + cur , 0);
console.log(el1);
const el2 = [1, 2, 3, 4].myReduceMethod((acc, cur) => acc + cur , 0);
console.log(el2);

const el3 = [].myReduceMethod((acc, cur) => acc + cur);
console.log(el3);

/*
// reduce(callbackFn, initialValue?)
// callbackFn receives 4 arguments EVERY TIME it's called:
callbackFn(accumulator, currentValue, index, originalArray)

callbackFn(accumulator, currentValue, index, originalArray)
           │            │              │         │
           │            │              │         └── Full original array reference
           │            │              └────────── Current element's index
           │            └───────────────────────── Current element being processed
           └────────────────────────────────────── Previous result (grows each time)

*/