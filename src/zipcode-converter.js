const _ = require('lodash');

function checkZipcode(zipcode) {
	let finalZipcode = zipcode;
	if(finalZipcode.length === 10 && finalZipcode.charAt(8) === '-') {
		finalZipcode = finalZipcode.substring(0,8) + finalZipcode.charAt(9);
	}
	let isAllNumbers = _.every(finalZipcode, zipcode => '0'<= zipcode && zipcode <= '9');
	return isAllNumbers && finalZipcode.length===5 || finalZipcode.length===9;
}

module.exports = {
	checkZipcode : checkZipcode
}