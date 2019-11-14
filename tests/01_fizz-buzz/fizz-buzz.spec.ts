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

	it('should return a string representing number 4 when fizzbuzz 4', () => {
		const result = fizzbuzz(4);
		expect(result).to.equal('4')
	});
});

describe('Multiple of 3 behaviour', () => {
	it('should return Fizz when fizzbuzz 3', () => {
		const result = fizzbuzz(3);
		expect(result).to.equal('Fizz');
	});
	it('should return Fizz when fizzbuzz 6', () => {
		const result = fizzbuzz(6);
		expect(result).to.equal('Fizz');
	});
});

describe('Multiple of 5 behaviour', () => {
	it('should return Buzz when fizzbuzz 5', () => {
		const result = fizzbuzz(5);
		expect(result).to.equal('Buzz');
	});
	it('should return Buzz when fizzbuzz 10', () => {
		const result = fizzbuzz(10);
		expect(result).to.equal('Buzz');
	});
});

describe('Multiple of 3 and 5 behaviour', () => {
	it('should return FizzBuzz when fizzbuzz 15', () => {
		const result = fizzbuzz(15);
		expect(result).to.equal('FizzBuzz');
	});
	it('should return FizzBuzz when fizzbuzz 30', () => {
		const result = fizzbuzz(30);
		expect(result).to.equal('FizzBuzz');
	});
});