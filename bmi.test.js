// Import the function to test
const bmi = require('./bmi');

// Test the bmi function
describe('bmi', () => {
  test('calculates BMI correctly', () => {
    expect(bmi(5, 7, 150)).toBe(23.5);
    expect(bmi(6, 0, 200)).toBe(27.2);
  });
});
