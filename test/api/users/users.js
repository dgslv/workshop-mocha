const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();


const sum = (a, b) => a + b;

describe('Testing function sum', () => {
    it('should return 5', () => {
        expect(sum(2,3)).to.equal(5)
    })

    it('should return 1', () => {
        expect(sum(1,0)).to.equal(1)
    })

    it('should return 0', () => {
        expect(sum(0, 0)).to.equal(0)
    })
})




