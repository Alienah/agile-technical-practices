import { expect } from 'chai';
import 'mocha';
import fizzbuzz from '../../src/01_fizz-buzz/fizz-buzz';

describe('Normal string behaviour', () => { 
  it('should return a string representing number 1 when fizzbuzz 1', () => { 
		const result = fizzbuzz(1);
		expect(result).to.equal('1'); 
	}); 
	
	it('should return a string representing number 2 when fizzbuzz 2', () => {
		const result = fizzbuzz(2);
		expect(result).to.equal('2')
	});
});