const mapRaw = (iterFunction, arrayInput) => {
  let result = [];

  for (let i = 0; i < arrayInput.length; i++) {
    result.push(iterFunction(arrayInput[i]));
  }

  return result;
};

exports.default = mapRaw;
