function compose(...fns) {
  console.log(fns);
  console.log(fns.length);
}

let fn1 = () => {
  let x = 1;
};

let fn2 = () => {
  let x = 1;
};

compose(
  fn1,
  fn2
);
