const arr = [1, 2, 3, 4, 5];

Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }

  return true;
}

const output = arr.myEvery(a => a > 1);

console.log('Output: ', output);
