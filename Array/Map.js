const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result;
}

arr.myMap(a => console.log(a));