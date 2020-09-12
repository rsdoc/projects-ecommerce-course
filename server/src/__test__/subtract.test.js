const sub = require('../utility/subtract');

test('Substraction of two numbers', function () {
  expect(sub(2, 3)).toBe(-1);
});
