import { expect } from 'chai';
import 'mocha';
import isLeapYear from '../../src/01_leap-year/leap-year';

describe('Leap Year behaviour', () => { 
  it('should return true if number is divisible by 4', () => { 
		const leapYear = isLeapYear(1996);
		expect(leapYear).to.be.true; 
  });
  it('should return true if number is not divisible by 100', () => {
    const leapYear = isLeapYear(1996);
    expect(leapYear).to.be.true;
  });
});

describe('Atypical Leap Year behaviour', () => {
  it('should return true if number is divisible by 400', () => {
    const leapYear = isLeapYear(2000);
    expect(leapYear).to.be.true;
  });
});

describe('Coomon Year behaviour', () => {  
  it('should return false if number is not divisible by 4', () => { 
		const leapYear = isLeapYear(2001);
		expect(leapYear).to.be.false; 
	}); 
});