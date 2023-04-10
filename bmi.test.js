// Tests for the functions
const {bmi, inches, underweight, normalweight, overweight, obese, calculateBMI} = require('./bmi.js');


// Unit tests for the bmi function.
describe('bmi', () => {
    test('BMI for 6ft and 150lbs is 20.8', () => {
        expect(bmi(6, 0, 150)).toBeCloseTo(20.8, 1);
    });
  
    test('BMI for 4ft 13in and 115lbs is 22.3', () => {
        expect(bmi(4, 13, 115)).toBeCloseTo(22.3, 1);
    });
  
    test('BMI for 5ft 1in and 115lbs is 22.3', () => {
        expect(bmi(5, 1, 115)).toBeCloseTo(22.3, 1);
    });
});

// Unit tests for the inches function. 
describe('inches', () => {
    test('Should return valid input', () => {
        // Set up input values
        const validInput = 7;
        // Call function with input value
        const result = inches(validInput);
        // Check that the function returns the expected value
        expect(result).toBe(undefined);
    });
});

// Unit tests for the weight categories.
describe('under weight', () => {
    test( 'BMI(17) is less than 18.5 will correctly identify under weight category', () => {
        expect( underweight( 17 ) ).toBe( "Under weight" );
    });

    test( 'BMI(19) is more than 18.5 will not correctly identify under weight category', () => {
        expect( underweight( 19 ) ).toBe( undefined );
    });
});


describe('normal weight', () => {
    test( 'BMI(22) is between 18.5 and 24.9 will correctly identify normal weight category', () => {
        expect( normalweight( 22 ) ).toBe( "Normal weight" );
    });

    test( 'BMI(18.4) is not between 18.5 and 24.9 will not correctly identify normal weight category', () => {
        expect( normalweight( 18.4 ) ).toBe( undefined );
    });
});


describe('over weight', () => {
    test( 'BMI(27) is between 25 and 29.9 will correctly identify over weight category', () => {
        expect( overweight( 27 ) ).toBe( "Over weight" );
    });

    test( 'BMI(30) is not between 25 and 29.9 will not correctly identify over weight category', () => {
        expect( overweight( 30 ) ).toBe( undefined );
    });
});


describe('obese', () => {
    test( 'BMI(35) is greater than or equal to 30 will correctly identify obese category', () => {
        expect( obese( 35 ) ).toBe( "Obese" );
    });

    test( 'BMI(29.9) is less than 30 will not correctly identify obese category', () => {
        expect( obese( 29.9 ) ).toBe( undefined );
    });
});

/*
// Unit test for the calculate bmi function. 
describe('calculateBMI', () => {
  // Create a fake DOM environment
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="heightF_input" type="number" value="5">
      <input id="heightI_input" type="number" value="6">
      <input id="weight_input" type="number" value="150">
      <div id="result"></div>
    `;
  });

  it('should calculate the BMI and category correctly', () => {
    calculateBMI();

    // Check if the BMI is set correctly
    expect(document.querySelector('#result p:first-child').textContent).toBe('BMI: 22.9');

    // Check if the category is set correctly
    expect(document.querySelector('#result p:last-child').textContent).toBe('Category: Normal weight');
  });
});
*/

// Install Jest = npm install --save-dev jest
// Run = npm test bmi.test.js
