let {zipcodeToBarcode} = require('../core/zipcode-to-barcode');

module.exports = function (zipcode) {
  let barcode = zipcodeToBarcode(zipcode);
  if (barcode.startsWith('Invalid zipcode:')) {
    return {
      error: 'Please give right input',
    }
  } else {
    return {
      text: barcode,
      reset: true
    }
  }
};
