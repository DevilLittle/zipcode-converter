const _ = require('lodash');

function checkZipcode(zipcode) {
	let finalZipcode = zipcode;
	if(finalZipcode.length === 10 && finalZipcode.charAt(8) === '-') {
		finalZipcode = finalZipcode.substring(0,8) + finalZipcode.charAt(9);
	}
	let isAllNumbers = _.every(finalZipcode, zipcode => '0'<= zipcode && zipcode <= '9');
	return isAllNumbers && finalZipcode.length===5 || finalZipcode.length===9;
}

function formatZipcode(zipcode) {
	return [...zipcode].filter(c => c!=='-').map(n=>parseInt(n));
}

function calculateCd(zipcodeNubmers) {
	let total = _.sum(zipcodeNubmers);
	for(let i =1;i<=9;i++) {
		if((total + i) % 10 === 0){
			return i;
		}
	}
	return 0;
}

let mapping = {
	1:   ":::||",
	2:   "::|:|",
	3:   "::||:",
	4:   ":|::|",
	5:   ":|:|:",
	6:   ":||::",
	7:   "|:::|",
	8:   "|::|:",
	9:   "|:|::",
	0:   "||:::"
}

function convertToBarcode(zipcodeNumbers) {
	let barcode = zipcodeNumbers.map(c => mapping[c]).join('');
	return '|' + barcode + '|';
}

module.exports = {
	checkZipcode : checkZipcode,
	formatZipcode: formatZipcode,
	calculateCd: calculateCd,
	convertToBarcode: convertToBarcode
}