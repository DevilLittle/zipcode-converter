let {barcodeToZipcode} = require('../core/barcode-to-zipcode');
let CommandResponse = require('../command-response');

class BarcodeToZipcodeCommand {
  run(barcode) {
    let zipcode = barcodeToZipcode(barcode);
    if (zipcode.startsWith('Invalid barcode:')) {
      return new CommandResponse({
        error: 'Please give right input'
      })
    } else {
      return new CommandResponse({
        text: zipcode,
        reset: true
      });
    }
  }
}

module.exports = BarcodeToZipcodeCommand;