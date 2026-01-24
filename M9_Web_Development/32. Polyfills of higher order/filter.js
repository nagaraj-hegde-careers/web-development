// Polyfill for Array.prototype.filter() - adds filter functionality if it doesn't exist
// if (!Array.prototype.filter) {
    Array.prototype.myFilter = function (callback, thisArg) {
        // Validate callback - must be a function
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'must be a fuction');
        }
        // Initialize empty result array
        var result = [];
        // Store reference to original array
        var originalArr = this;
        // Loop through all indices from 0 to array.length-1
        for (var i = 0; i < originalArr.length; i++) {
            // CRITICAL: Check if index EXISTS (handles sparse arrays with holes)
            // "i in originalArr" returns false for empty slots
            if (i in originalArr) {
                // Set 'this' context for callback (thisArg if provided, else original array)
                var context = thisArg ? thisArg : this;
                // Execute callback with: (element, index, originalArray)
                // .call() ensures correct 'this' binding
                if (callback.call(context, originalArr[i], i, originalArr)) {
                    // If callback returns TRUTHY, push ORIGINAL ELEMENT to result
                    // Note: filter keeps original elements, doesn't transform them
                    result.push(originalArr[i]);
                }
                // If callback returns FALSY, skip the element
            }
            // Holes are completely skipped (no undefined pushed)
        }
        // Return dense array with only elements that passed the test
        return result;
    }
// }
const arr = [1, 2, 3, , , 4, 5,];
console.log(arr);
// console.log(arr[3]);

const r1 = arr.filter(el => el % 2 === 0);
console.log(r1);

const r2 = arr.myFilter(el => el % 2 === 0);
console.log(r2);

