const nestedArr = [1, [2, 3], [4, 5, [6, 7]], undefined, {}, "hello",];
// output should be == [1,2,3,4,5,6,7, undefined, {}, "hello"];

function flattenArray(arr) {
    return arr.reduce((acc, currValue) => {
        if (Array.isArray(currValue)) {
            // RECURSION: Call flattenArray on nested array
            acc.push(...flattenArray(currValue))
        } else {
            // Non-array: push directly
            acc.push(currValue);
        }
        return acc;
    }, []) // Initial empty array
}

const res1 = flattenArray(nestedArr);
console.log("res1:", res1);

// Using built-in method
console.log(nestedArr.flat(1));
console.log(nestedArr.flat(2));
console.log(nestedArr.flat(Infinity));