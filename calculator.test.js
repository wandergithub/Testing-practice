const Calculator = require('./calculator');

describe('Add method', () => {
  test('Check 1 + 1 = 2', () => {
    //Arange 
    const a = 1;
    const b = 1;
    const calculator = new Calculator();

    //Act 
    const result = calculator.add(a,b);

    // Asset
    expect(result).toBe(2);
  });

  test('Check 8 + 89 = 2', () => {
    //Arange 
    const a = 8;
    const b = 89;
    const calculator = new Calculator();

    //Act 
    const result = calculator.add(a,b);

    // Asset
    expect(result).toBe(97);
  });

  test('Check 15 + 20 = 35', () => {
    //Arange 
    const a = 15;
    const b = 20;
    const calculator = new Calculator();

    //Act 
    const result = calculator.add(a,b);

    // Asset
    expect(result).toBe(35);
  });
});

describe('Substract method', () => {
  test('Check for 7-7 = 0', () => {
    // Arange
    const a = 7;
    const b = 7;
    const expectedResult = 0;
    const calculator = new Calculator();
    //Act
    const result = calculator.subtract(a, b);
    
    // Assert
    expect(result).toBe(expectedResult);
  });
  
  test('Check for 20-15 = 5', () => {
    // Arange
    const a = 20;
    const b = 15;
    const expectedResult = 5;
    const calculator = new Calculator();
    //Act
    const result = calculator.subtract(a, b);
    
    // Assert
    expect(result).toBe(expectedResult);
  });

  test('Check for 3-1 = 2', () => {
    // Arange
    const a = 3;
    const b = 1;
    const expectedResult = 2;
    const calculator = new Calculator();
    //Act
    const result = calculator.subtract(a, b);
    
    // Assert
    expect(result).toBe(expectedResult);
  });
});

describe('divide method', () => {
  test('Check for 4/2 = 2', () => {
    const a = 4;
    const b = 2;
    const expectedResult = 2;
    const calculator = new Calculator();

    const result = calculator.divide(a, b);

    expect(result).toBe(expectedResult);
  });
  test('Check for 10/2 = 5', () => {
    const a = 10;
    const b = 2;
    const expectedResult = 5;
    const calculator = new Calculator();

    const result = calculator.divide(a, b);

    expect(result).toBe(expectedResult);
  });

  test('Check for 8/2 = 4', () => {
    const a = 8;
    const b = 2;
    const expectedResult = 4;
    const calculator = new Calculator();

    const result = calculator.divide(a, b);

    expect(result).toBe(expectedResult);
  });
});

describe('multiply method', () => {
  test('Check for 4 * 2 = 8', () => {
    const a = 4;
    const b = 2;
    const expectedResult = 8;
    const calculator = new Calculator();

    const result = calculator.multiply(a, b);

    expect(result).toBe(expectedResult);
  });
  test('Check for 10 * 2 = 20', () => {
    const a = 10;
    const b = 2;
    const expectedResult = 20;
    const calculator = new Calculator();

    const result = calculator.multiply(a, b);

    expect(result).toBe(expectedResult);
  });

  test('Check for 8 * 2 = 16', () => {
    const a = 8;
    const b = 2;
    const expectedResult = 16;
    const calculator = new Calculator();

    const result = calculator.multiply(a, b);

    expect(result).toBe(expectedResult);
  });
});