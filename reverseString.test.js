const reverseString = require('./reverseString');

test('Reverse string check', () => {
  //Arange
  const string = "Hello";

  // Act
  const reversedString = reverseString(string);

  // Assert
  expect(reversedString).toMatch("olleH");
});