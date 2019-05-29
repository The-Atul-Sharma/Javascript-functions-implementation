# Array native function

> Array native javascript function implementation

### Implementation

#### 1. forEach

```sh
const arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

arr.myForEach(a => console.log(a));
```

#### 2. map
```sh
const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result;
}

arr.myMap(a => console.log(a));
```

#### 3. reduce
```sh
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
```

#### 4. filter
```sh
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
```

#### 5. find
```sh
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
```

#### 6. some
```sh
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
```

#### 7. every
```sh
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
```
