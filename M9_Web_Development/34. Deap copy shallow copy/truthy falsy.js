// from given values filter out truthy values.

const values = ["", " ", "hello", 0, 1, -0, true, false, function () {}, {}, [], [1,2], NaN, null, undefined, 1/0, {a: 1}];

values.forEach(value => {
    if (value) {
        console.log(value, "is truthy")
    } else {
        console.log(value, "is falsy")
    }
})
// Output:
//  is falsy
//   is truthy
// hello is truthy
// 0 is falsy
// 1 is truthy
// -0 is falsy
// true is truthy
// false is falsy
// [Function (anonymous)] is truthy
// {} is truthy
// [] is truthy
// [ 1, 2 ] is truthy
// NaN is falsy
// null is falsy
// undefined is falsy
// Infinity is truthy
// { a: 1 } is truthy

const res = values.filter(Boolean);
console.log(res);
/**
[
  ' ',
  'hello',
  1,
  true,
  [Function (anonymous)],
  {},
  [],
  [ 1, 2 ],
  Infinity,
  { a: 1 }
]
 */
