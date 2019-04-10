function filter<T>(fn: (x: T) => boolean, xs: Array<T>): Array<T> {
  let result = [];

  for (let i = 0; i < xs.length; i++) {
    if (fn(xs[i]) === true) {
      result.push(xs[i]);
    }
  }

  return result;
}

export default filter;
