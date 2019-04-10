function map<T, U>(fn: (x: T) => U): (xs: Array<T>) => Array<U> {
  return function(xs: Array<T>): Array<U> {
    return xs.reduce((acc: Array<U>, x: T) => {
      acc.push(fn(x));
      return acc;
    }, []);
  };
}

export default map;
