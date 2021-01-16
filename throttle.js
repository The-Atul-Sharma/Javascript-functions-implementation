function throttle(func, duration) {
  let shouldWait = false;

  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args); 

      shouldWait = true;

      setTimeout(function () {
        shouldWait = false;
      }, duration);
    }
  };
}