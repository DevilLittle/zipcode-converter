let CommandResponse = require('../command-response');
let {zipcodeToBarcode} = require('../core/zipcode-to-barcode');

class ZipcodeToBarcode {
  run(zipcode) {
    let barcode = zipcodeToBarcode(zipcode);
    if (barcode.startsWith('Invalid zipcode:')) {
      return new CommandResponse({
        error: 'Please give right input'
      });
    } else {
      return new CommandResponse({
        text: barcode,
        reset: true
      })
    }
  }
}

module.exports = ZipcodeToBarcode;
