let {barcodeToZipcode} = require('../core/barcode-to-zipcode');

module.exports = function (barcode) {
  let zipcode = barcodeToZipcode(barcode);
  if (zipcode.startsWith('Invalid barcode:')) {
    return {
      error: 'Please give right input'
    }
  } else {
    return {
      text: zipcode,
      reset: true
    }
  }
};
