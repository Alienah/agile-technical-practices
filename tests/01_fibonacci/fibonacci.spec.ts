import { expect } from 'chai';
import 'mocha';
import getFibonacci from '../../src/01_fibonacci/fibonacci';

describe('Fibonacci generator', () => { 
  it('should return a number when we introduce a number', () => { 
		const result = getFibonacci(1);
		expect(result).to.be.a('number'); 
	}); 
  it('should return number 0 when we introduce position 0', () => { 
		const fibonacciNumber = getFibonacci(0);
		expect(fibonacciNumber).to.equal(0); 
	}); 
  it('should return number 1 when we introduce position 1', () => { 
		const fibonacciNumber = getFibonacci(1);
		expect(fibonacciNumber).to.equal(1); 
	}); 
});

