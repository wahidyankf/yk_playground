function filter<T>(fn: (x: T) => boolean): (xs: Array<T>) => Array<T> {
  return function(xs: Array<T>): Array<T> {
    return xs.reduce((acc: Array<T>, x: T) => {
      if (fn(x)) {
        acc.push(x);
      }

      return acc;
    }, []);
  };
}

export default filter;
