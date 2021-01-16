function memoize(func) {
  let memo = {};

  return function(...args) {
    let arg = args.toString();

    if (arg in memo)
      return memo[arg];
    else
      return (memo[arg] = func.apply(this, args));
  }
}

function foo() { return a + b; }

let memoFoo = memoize(foo);

memoFoo(1,2);