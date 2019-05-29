const arr = [1, 2, 3, 4, 5];

Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
}

const output = arr.myFind(a => a > 2)

console.log('Output: ', output);
