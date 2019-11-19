import { expect } from 'chai';
import 'mocha';
import getFibonacci from '../../src/01_fibonacci/fibonacci';

describe.only('Fibonacci generator', () => { 
  it('should return a number when we introduce a number', () => { 
		const result = getFibonacci(1);
		expect(result).to.be.a('number'); 
	}); 
});

