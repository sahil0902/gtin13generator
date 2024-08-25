# GTIN-13 Generator 🚀

## Overview

**gtin13generator** is a lightweight Node.js utility designed to automatically generate valid GTIN-13 numbers, specifically optimized for use in Google product listings and other e-commerce platforms. The package ensures compliance with GTIN-13 standards by calculating the necessary check digit, making it an ideal tool for product identification in retail and online markets.

## Features ✨

- **Automatic GTIN-13 Generation:** Effortlessly create valid GTIN-13 numbers.
- **GTIN-13 Validation:** Verify the correctness of a GTIN-13 number.
- **Lightweight & Fast:** Designed to be quick and efficient, with minimal dependencies.
- **Easy Integration:** Simple API that can be easily integrated into your Node.js applications.
- **Optimized for E-commerce:** Perfect for Google Merchant Center and other product listing services.

## Installation 🛠️

You can install **gtin13generator** via npm:

```bash
npm install gtin13generator --save
```

## Usage 💻

### Generating a GTIN-13
```javascript
const { generateGTIN13 } = require('gtin13generator');

const gtin13 = generateGTIN13();
console.log(gtin13); // Outputs a valid GTIN-13 number
```
### Example Usage in Real World Projects
Imagine you want to upload some products to Google Shopping. You would need a GTIN number for each product. In your schema, you can add a `gtin` column and set its default value to a generated GTIN-13 number like this:

```javascript
const { generateGTIN13 } = require('gtin13generator');

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  gtin: {
    type: Number,
    unique: true,
    default: generateGTIN13
  }
});

const Product = mongoose.model('Product', productSchema);
```

This way, each product will automatically have a unique and valid GTIN-13 number assigned to it.


### Validating a GTIN-13
```javascript
const { validateGTIN13 } = require('gtin13generator');

const isValid = validateGTIN13('1234567890128');
console.log(isValid); // Outputs true or false depending on the validity of the GTIN-13
```

### Example 📦
Here’s how you might use the package in a real-world scenario:

```javascript
const { generateGTIN13, validateGTIN13 } = require('gtin13generator');

const newProductGTIN = generateGTIN13();
console.log(`Generated GTIN-13: ${newProductGTIN}`);

if (validateGTIN13(newProductGTIN)) {
  console.log('This GTIN-13 is valid and ready for use!');
} else {
  console.error('There was an error generating a valid GTIN-13.');
}
```

## API Reference 📚

### `generateGTIN13()`
Generates a valid GTIN-13 number.

- **Returns:** `string` - A 13-digit GTIN-13 number.
- **Example**:
```Javascript
const gtin = generateGTIN13();
console.log(gtin); // e.g., "1234567890128"
```
### `generateGTIN13`
Alternative usage without parentheses. This can be useful when passing the function as a callback or reference.
- **Returns:** `Function` - The GTIN-13 generator function.
- **Example:**
```Javacript
console.log(generateGTIN13); // e.g., "9876543210987"
```
### `validateGTIN13(gtin13)`
Validates a given GTIN-13 number.

- **Parameters:**
  - `gtin13` (`string`): The GTIN-13 number to validate.
- **Returns:** `boolean` - `true` if the GTIN-13 number is valid, `false` otherwise.

## License ⚖️
This project is licensed under the MIT License - see the [LICENSE](https://github.com/sahil0902/gtin13generator?tab=MIT-1-ov-file) file for details.

## Contributing 🤝
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request or open an issue.

## Contact 📬
For any questions or issues, please open an issue on the [GitHub repository](https://github.com/sahil0902/gtin13generator) or contact me via [my website](https://msahil.onrender.com).

## Links 🔗
- **NPM:** [gtin13generator](https://www.npmjs.com/package/gtin13generator)
- **GitHub:** [GitHub Repository](https://github.com/sahil0902/gtin13generator)

## Acknowledgements 🙏
Special thanks to `generate-unique-id` and `gtin` packages for making this tool possible.
