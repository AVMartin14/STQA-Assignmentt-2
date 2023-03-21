// This allows for user input in the terminal.
const readline = require( 'readline' );
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} );

// Function to calculate the BMI.
const bmi = function( height_f, height_i, weight ) {
    // 1. Multiply the weight in pounds by 0.45 (the metric conversion factor).
    let weight_kg = weight * 0.45;
    // 2. Multiply the height in inches by 0.025 (the metric conversion factor).
    let height = ( ( height_f * 12 ) + height_i );
    let height_m = height * 0.025;
    // 3. Square the answer from step 2.
    let square_height = height_m * height_m;
    // 4. Divide the answer from step 1 by the answer from step 3.
    let total = ( weight_kg / square_height );
    return total.toFixed(1); // Returns it with one decimal place.
};

// Functions to output the category based on the weight.
const underweight = function( bmi ) {
    // <18.5, Underweight
    if ( bmi < 18.5 ) return true;
    else if ( bmi > 18.5 ) return false;
};
const normalweight = function( bmi ) {
    // 18.5–24.9, Normal weight
    if ( bmi >= 18.5 && bmi < 25 ) return true;
    else return false;
};
const overweight = function( bmi ) {
    // 25–29.9, Overweight
    if ( bmi >= 25 && bmi < 30 ) return true;
    else return false;
};
const obese = function( bmi ) {
    // >=30, Obese
    if ( bmi >= 30 ) return true;
    else return false;
};
  
    // Prompts the user to enter the height input.
    rl.question( 'Please enter your height in feet and inches \n   feet: ', ( height_f ) => {
        rl.question( '   inches: ', ( heightI_input ) => {
            let height_i = parseFloat( heightI_input );
            // Prompts the user to enter the weight input.
            rl.question( 'Please enter your weight in pounds: ', ( weight ) => {
                rl.close();
                // Return BMI value and category:
                let BMI = bmi( height_f, height_i, weight );
                console.log( "BMI: " + BMI );
                if ( underweight( BMI ) == true ) console.log( "Category: Under weight" );
                else if ( normalweight( BMI ) == true ) console.log( "Category: Normal weight" );
                else if ( overweight( BMI ) == true ) console.log( "Category: Over weight" );
                else if ( obese( BMI ) == true ) console.log( "Category: Obese" );
                else console.log( "Category: UNKNOWN" );
            } );
        } );
    } );


module.exports = {
    bmi,
    underweight,
    normalweight,
    overweight,
    obese
};

// install node.js
// Run node bmi.js
   
