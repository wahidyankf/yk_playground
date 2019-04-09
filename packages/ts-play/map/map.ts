const map = <T, U>(
  iterFunction: (arrayItem: T) => U,
  arrayInput: Array<T>
): Array<U> => {
  let tempArray = [];

  for (let i = 0; i < arrayInput.length; i++) {
    tempArray.push(iterFunction(arrayInput[i]));
  }

  return arrayInput.map(iterFunction);
};

export default map;
