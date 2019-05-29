const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;

  for(let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback(accumulator, this[i])
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
}

const output = arr.myReduce((result, a) => {
  return result + a;
}, 5);

console.log('Output: ', output);
