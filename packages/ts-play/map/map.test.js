const map = require('./mapWithReduceUncurried').default;

const arrayOfInt = [1, 2, 3, 4];

const arrayOfString = ['1', '2', '3', '4'];

test('map function is defined', () => {
  expect(typeof map).toEqual('function');
});

test('array of int success', () => {
  expect(map(item => item * 2, arrayOfInt)).toEqual([2, 4, 6, 8]);
});

test('array of string success', () => {
  expect(map(item => item + '-2', arrayOfString)).toEqual([
    '1-2',
    '2-2',
    '3-2',
    '4-2',
  ]);
});
