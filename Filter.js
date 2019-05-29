const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
}

const output = arr.myFilter(a => a > 2);

console.log('Output: ', output);