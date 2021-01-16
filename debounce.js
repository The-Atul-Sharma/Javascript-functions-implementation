function debounce(func, duration) {
  let timeout;

  return function (...args) {
    const effect = () => {
      timeout = null;

      return func.apply(this, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(effect, duration);
  };
}