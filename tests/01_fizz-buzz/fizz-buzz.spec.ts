import { expect } from 'chai';
import 'mocha';
import helloTest from '../../src/01_fizz-buzz/fizz-buzz';

describe('First test', 
  () => { 
    it('should return true', () => { 
      const result = helloTest('hola');
      expect(result).to.equal('hola'); 
  }); 
});