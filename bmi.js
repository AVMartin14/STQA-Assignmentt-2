// Function to calculate the BMI.
const bmi = function(height_f, heightI_input, weight) {
    let height_i = parseFloat( heightI_input );
    // 1. Multiply the weight in pounds by 0.45 (the metric conversion factor).
    let weight_kg = weight * 0.45;
    // 2. Multiply the height in inches by 0.025 (the metric conversion factor).
    let height = ( ( height_f * 12 ) + height_i );
    let height_m = height * 0.025;
    // 3. Square the answer from step 2.
    let square_height = height_m * height_m;
    // 4. Divide the answer from step 1 by the answer from step 3.
    let total = ( weight_kg / square_height );
    return total;
};

// Function to check the user's input.
const inches = function(inches) {
    while (inches >= 12) {
        console.log(" You must enter inches. ");
        inches = parseFloat(prompt("   inches: "));
    }
};

// Functions to output the category based on the weight.
const underweight = function(bmi) {
    // <18.5, Underweight
    if (bmi < 18.5) return "Underweight";
};
const normalweight = function(bmi) {
    // 18.5–24.9, Normal weight
    if (bmi >= 18.5 && bmi < 25) return "Normal weight";
};
const overweight = function(bmi) {
    // 25–29.9, Overweight
    if (bmi >= 25 && bmi < 30) return "Overweight";
};
const obese = function(bmi) {
    // >=30, Obese
    if (bmi >= 30) return "Obese";
};

function calculateBMI() {
    let heightF_input = document.getElementById("heightF_input").value;
    let heightI_input = document.getElementById("heightI_input").value;
    let weight_input = document.getElementById("weight_input").value;

    inches(heightI_input);

    let BMI = bmi(heightF_input, heightI_input, weight_input);
    let result = document.getElementById("result");

    result.innerHTML = `
    <p>BMI: ${BMI.toFixed(1)}</p>
    <p>Category: ${underweight(BMI) || normalweight(BMI) || overweight(BMI) || obese(BMI)}</p>
    `;
}
