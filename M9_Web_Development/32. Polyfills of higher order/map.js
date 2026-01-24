// Polyfill for Array.prototype.map() - adds map functionality if it doesn't exist
// if(!Array.prototype.map){
    // Define custom map method on Array prototype
    Array.prototype.myMapMethod = function (callbackFn, thisArg) {
        // Validate callback - must be a function
        if (typeof callbackFn !== 'function') {
            throw new TypeError(callbackFn + ' is not a function.')
        }
        // Initialize empty result array
        var result = [];

        // Store reference to original array for clarity
        let originalArr = this;
        // Loop through all indices from 0 to array.length-1
        for (var i = 0; i < originalArr.length; i++) {
            // CRITICAL: Check if index EXISTS (handles sparse arrays with holes)
            // "i in originalArr" returns false for empty slots (holes)
            if (i in originalArr) {
                // Set 'this' context for callback (thisArg if provided, else original array)
                const context = thisArg ? thisArg : this;
                // Execute callback with: (element, index, originalArray)
                // .call() ensures correct 'this' binding
                var mappedValue = callbackFn.call(context, originalArr[i], i, originalArr);
                // Add mapped value to result (creates DENSE array - no holes)
                result.push(mappedValue);
            }
            // If index is a hole, skip entirely - no undefined pushed to result
        }
        // Return dense array containing only mapped EXISTING elements
        return result;
    }
// }

const r1 = [1, 2, , 3, 4, 5].map(el => el * 2)
console.log(r1)
const r2 = [1, 2, , 3, 4, 5].myMapMethod(el => el * 2)
console.log(r2)

const r3 = [1, 2, 3, 4, , 5].map(el => el / 2)
console.log(r3)
const r4 = [1, 2, 3, 4, , 5].myMapMethod(el => el / 2)
console.log(r4)