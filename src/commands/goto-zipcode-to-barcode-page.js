let CommandResponse = require('../command-response');
let ZipcodeToBarcodeCommand = require('./zipcode-to-barcode');

class GotoZipcodeToBarcodePage {
  run() {
    return new CommandResponse({
        text: 'Please input zip code:',
        newMapping: {
          "*": new ZipcodeToBarcodeCommand()
        }
      }
    )
  }
}

module.exports = GotoZipcodeToBarcodePage;
