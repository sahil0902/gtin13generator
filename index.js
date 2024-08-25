const generateUniqueId = require('generate-unique-id');
const gtin = require('gtin');

// Function to calculate the check digit
function calculateCheckDigit(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    let digit = parseInt(number.charAt(i), 10);

    // Multiply odd-positioned digits by 1 and even-positioned digits by 3
    if (i % 2 === 0) {
      sum += digit * 1;
    } else {
      sum += digit * 3;
    }
  }

  const modulo = sum % 10;
  return modulo === 0 ? 0 : 10 - modulo;
}

// Function to generate a valid GTIN-13
function generateGTIN13() {
  const baseNumber = generateUniqueId({
    length: 12,
    useLetters: false
  });

  const checkDigit = calculateCheckDigit(baseNumber);
  return baseNumber + checkDigit;
}

// Function to validate a GTIN-13 number
function validateGTIN13(gtin13) {
  return gtin.isValid(gtin13);
}

// Export the functions
module.exports = {
  generateGTIN13,
  validateGTIN13,
};
