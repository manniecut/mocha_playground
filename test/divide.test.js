const divide = require('../index');
const expect = require('chai').expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        /*const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        const actualAnswer = divide(a, b);*/

        expect(divide(8, 4)).to.equal(2);
    });

    it ('should throw an error when dividing by zero', () => {
        const a = 9, b = 0;

        const fn = () => {
            divide(a, b)
        };

        expect(fn).to.throw();
    
    });
});