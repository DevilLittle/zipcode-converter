const _ = require('lodash');

function checkZipcode(zipcode) {
	let finalZipcode = zipcode;
	if(finalZipcode.length === 10 && finalZipcode.charAt(5) === '-') {
		finalZipcode = finalZipcode.substring(0,5) + finalZipcode.substring(6);
	}
	let isAllNumbers = _.every(finalZipcode, zipcode => '0'<= zipcode && zipcode <= '9');
	return isAllNumbers && finalZipcode.length===5 || finalZipcode.length===9;
}

function formatZipcode(zipcode) {
	return [...zipcode].filter(c => c!=='-').map(n=>parseInt(n));
}

function calculateCd(zipcodeNumbers) {
	let total = _.sum(zipcodeNumbers);
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

function zipcode2barcode(zipcode) {
	if(checkZipcode(zipcode)) {
		let zipcodeNumbers = formatZipcode(zipcode);
		let cd = calculateCd(zipcodeNumbers);
		zipcodeNumbers.push(cd);
		let result = convertToBarcode(zipcodeNumbers);
		return result;
	} else {
		throw new Error('Invalid zipcode: ' + zipcode);
	}
}

module.exports = {
	checkZipcode : checkZipcode,
	formatZipcode: formatZipcode,
	calculateCd: calculateCd,
	convertToBarcode: convertToBarcode,
	zipcode2barcode: zipcode2barcode
}