const arr = [1, 2, 3, 4, 5];

Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback([this[i]])) {
      return true;
    }
  }

  return false;
}

const output = arr.mySome(a => a < 5);

console.log('Output: ', output);
