let {stripMargin} = require('stripmargin');
let BarcodeToZipcodePageCommand = require('./goto-barcode-to-zipcode-page');
let ZipcodeToBarcodePageCommand = require('./goto-zipcode-to-barcode-page');
let ExitCommand = require('./exit');
let InvalidInputCommand = require('./invalid-input');
let CommandResponse = require('../command-response');

class GotoMainPageCommand {
  run() {
    return new CommandResponse({
      text: stripMargin(
        `|1. Translate zip code to bar code
         |2. Translate bar code to zip code
         |3. Quit
         |Please input your choices(1~3)`),
      newMapping: {
        "1": new ZipcodeToBarcodePageCommand(),
        "2": new BarcodeToZipcodePageCommand(),
        "3": new ExitCommand(),
        "*": new InvalidInputCommand()
      }
    });
  }
}

module.exports = GotoMainPageCommand;