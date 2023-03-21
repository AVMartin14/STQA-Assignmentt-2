const {bmi, underweight, normalweight, overweight, obese} = require('./bmi')

// Unit tests for the bmi function.
test( 'BMI for 6ft and 150lbs is 20.8', () => {
  expect( bmi( 6, 0, 150 ) ).toBe( '20.8' );
} );
test( 'BMI for 4ft 13in and 115lbs is 22.3', () => {
  expect( bmi( 4, 13, 115 ) ).toBe( '22.3' );
} );
test( 'BMI for 5ft 1in and 115lbs is 22.3', () => {
  expect( bmi( 5, 1, 115 ) ).toBe( '22.3' );
} )

// Unit tests for the weight categories.
test( 'U - BMI(17) is less than 18.5 should return true', () => {
  expect( underweight( 17 ) ).toBe( true );
} );
test( 'U - BMI(19) is more than 18.5 should return false', () => {
  expect( underweight( 19 ) ).toBe( false );
} );

test( 'N - BMI(22) is between 18.5 and 24.9 should return true', () => {
  expect( normalweight( 22 ) ).toBe( true );
} );
test( 'N - BMI(18.4) is not between 18.5 and 24.9 should return false', () => {
  expect( normalweight( 18.4 ) ).toBe( false );
} );

test( 'O - BMI(27) is between 25 and 29.9 should return true', () => {
  expect( overweight( 27 ) ).toBe( true );
} );
test( 'O - BMI(30) is not between 25 and 29.9 should return false', () => {
  expect( overweight( 30 ) ).toBe( false );
} );

test( 'Ob - BMI(35) is greater than or equal to 30 should return true', () => {
  expect( obese( 35 ) ).toBe( true );
} );
test( 'Ob - BMI(29.9) is less than 30 should return false', () => {
  expect( obese( 29.9 ) ).toBe( false );
} );

// Install Jest - npm install --save-dev jest
// Run npm test tempConversion.spec.js
