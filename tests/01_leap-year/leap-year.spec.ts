import { expect } from 'chai';
import 'mocha';
import isLeapYear from '../../src/01_leap-year/leap-year';

describe.only('Leap Year behaviour', () => { 
  it('should return true if number is divisible by 4', () => { 
		const leapYear = isLeapYear(1996);
		expect(leapYear).to.equal(true); 
	});  
  it('should return false if number is divisible by 100, but not by 400', () => { 
		const leapYear = isLeapYear(1900);
		expect(leapYear).to.equal(false); 
	}); 
});