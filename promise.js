function myPromise(action) {
  this.status = 'pending';
  this.value = undefined;

  this.theCallbacks = [];
  this.onCatch = undefined;
  this.onFinally = undefined;

  this.then = function(callback) {
    this.theCallbacks.push(callback);

    return this;
  };

  this.catch = function(callback) {
    this.onCatch = callback;

    return this;
  };

  this.finally = function(callback) {
    this.onFinally = callback;

    return this;
  };

  action(resolver.bind(this), rejector.bind(this));

  function resolver(value) {
    this.status = 'fulfilled';
    this.value = value;

    this.theCallbacks.forEach(function(func) {
      func(this.value);
    }, this);
    
    if (typeof this.finallyCallback === 'function') {
      this.finallyCallback(this.value);
    }
  }

  function rejector(value) {
    this.status = 'rejected';
    this.value = value;
  
    if (typeof this.catchCallback === 'function') {
      this.catchCallback(this.value);
    }

    if (typeof this.finallyCallback === 'function') {
      this.finallyCallback(this.value);
    }
  }
} 