function map<T, U>(
  iterFunction: (arrayItem: T) => U,
  arrayInput: Array<T>
): Array<U> {
  let result = [];

  for (let i = 0; i < arrayInput.length; i++) {
    result.push(iterFunction(arrayInput[i]));
  }

  return result;
}

export default map;
