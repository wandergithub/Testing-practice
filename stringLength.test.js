const stringLength = require('./stringLength');

test('Return character count of "hello"', () => {
  //Arrange
  const string = 'hello';

  //Act
  const lengthOfstring = stringLength(string);

  //Assert
  expect(lengthOfstring).toBe(5);
});

test('Check if string is greater than 0 and less than 10', () => {
  //Arrange
  const string = "";

  //Act
  const stringlength = stringLength(string);

  // Assert 
  expect(stringlength).toMatch("String most be greater than 0");
});


test('Check if string is greater than 0 and less than 10', () => {
  //Arrange
  const string = "This string is greater than 10";

  //Act
  const stringlength = stringLength(string);

  // Assert 
  expect(stringlength).toMatch("String most be less than 10");
});