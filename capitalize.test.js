const capitalize = require('./capitalize');

test('capitalize the first char of the string', () => {
  const string = "hello";
  const expectedResult = "Hello";

  const result = capitalize(string);

  expect(result).toBe(expectedResult);
});