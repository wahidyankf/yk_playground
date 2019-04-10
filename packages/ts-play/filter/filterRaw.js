function filter(iterFunction, arrayInput) {
  let result = [];

  for (let i = 0; i < arrayInput.length; i++) {
    if (iterFunction(arrayInput[i]) === true) {
      result.push(arrayInput[i]);
    }
  }

  return result;
}

exports.default = filter;
