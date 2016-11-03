// Lighthouse Labs Exercise W1D4 - Callbacks - Anonymous Functions and Array Iterators //

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(values) {
  var valueZ = (values.x * values.x) + (values.y * values.y);
  return Math.sqrt(valueZ);
});

// console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

