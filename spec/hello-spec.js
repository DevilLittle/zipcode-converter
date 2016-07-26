let {checkZipcode} = require('../src/zipcode-converter');

describe("Zipcode converter", function () {
	describe("checkZipcode", () => {
		it("returns true for zipcode with 5 nubmers", function () {
			let zipcode = '12345';
			let result = checkZipcode(zipcode);
			expect(result).toBeTruthy();
		});
		it("returns true for zipcode with 9 nubmers", function () {
			let zipcode = '123451234';
			let result = checkZipcode(zipcode);
			expect(result).toBeTruthy();
		});
		it("returns true for zipcode with 9 nubmers with a '-' before last", function () {
			let zipcode = '12345678-9';
			let result = checkZipcode(zipcode);
			expect(result).toBeTruthy();
		});
		it("returns false other cases", function () {
			let zipcodes = ['1234', '123456', '123456789-', 'a2345'];
			for(let zipcode of zipcodes) {
				let result = checkZipcode(zipcode);
				expect(result).toBeFalsy();
			}
		});
	});
});