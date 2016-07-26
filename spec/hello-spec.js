let {checkZipcode, formatZipcode, calculateCd, convertToBarcode, zipcode2barcode} = require('../src/zipcode-converter');

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
		it("returns true for zipcode with 9 nubmers with a '-'", function () {
			let zipcode = '12345-6789';
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
	describe('formatZipcode', ()=> {
		it('format xxxxxxxx-x zipcode', ()=> {
			let zipcode = '12345-6789';
			let result = formatZipcode(zipcode);
			expect(result).toEqual([1,2,3,4,5,6,7,8,9])
		});
		it('format xxxxxxxx-x zipcode', ()=> {
			let zipcode = '12345-6789';
			let result = formatZipcode(zipcode);
			expect(result).toEqual([1,2,3,4,5,6,7,8,9])
		});
		it('format xxxxxxxxx zipcode', ()=> {
			let zipcode = '123456789';
			let result = formatZipcode(zipcode);
			expect(result).toEqual([1,2,3,4,5,6,7,8,9])
		});
		it('format xxxxx zipcode', ()=> {
			let zipcode = '12345';
			let result = formatZipcode(zipcode);
			expect(result).toEqual([1,2,3,4,5])
		});
	});
	describe('calculateCd', () => {
		it('calculate the correct CD', () => {
			let zipcodeNumbers = [1,2,3,4,5];
			let cd = calculateCd(zipcodeNumbers);
			expect(cd).toEqual(5);	
		});
		it('calculate the correct CD when it is 0', () => {
			let zipcodeNumbers = [1,2,3,2,2];
			let cd = calculateCd(zipcodeNumbers);
			expect(cd).toEqual(0);	
		});
	});
	describe('convertToBarcode', () => {
		it('for convert numbers to barcodes with frames', () => {
			let zipcodeNumbers = [1,2,3,4,5,6,7,8,9,0];
			let result = convertToBarcode(zipcodeNumbers);	
			expect(result).toEqual("|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|::||:::|");
		});
	})
	it('convert zipcode to barcode', () => {
		let zipcode = '45056-1234';
		let result = zipcode2barcode(zipcode);
		expect(result).toEqual('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|')
	});
});