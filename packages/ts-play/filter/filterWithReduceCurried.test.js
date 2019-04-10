const filter = require('./filterWithReduceCurried').default;

const arrayOfInt = [1, 2, 3, 4];

const arrayOfString = ['1', '2', '3', '4'];

test('filter function is defined', () => {
  expect(typeof filter).toEqual('function');
});

test('array of int success', () => {
  expect(filter(item => item % 2 === 0)(arrayOfInt)).toEqual([2, 4]);
});

test('array of string success', () => {
  expect(filter(item => item === '2')(arrayOfString)).toEqual(['2']);
});
