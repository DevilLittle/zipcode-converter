let CommandResponse = require('../command-response');
let BarcodeToZipcodeCommand = require('./barcode-to-zipcode');

class GotoBarcodeToZipcodePage {
  run() {
    return new CommandResponse({
      text: 'Please input bar code:',
      newMapping: {
        "*": new BarcodeToZipcodeCommand()
      }
    });
  }
}

module.exports = GotoBarcodeToZipcodePage;