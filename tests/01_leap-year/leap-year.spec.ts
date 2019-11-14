import { expect } from 'chai';
import 'mocha';
import isLeapYear from '../../src/01_leap-year/leap-year';

describe.only('Leap Year behaviour', () => { 
  it('should return true if number is divisible by 4', () => { 
		const result = isLeapYear(1996);
		expect(result).to.equal(true); 
	}); 
});