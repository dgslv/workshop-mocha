const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();


const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

describe('Testing functions', () => {
    describe('sum', () => {
        describe('odd numbers', () => {
            it('should return 5', () => {
                expect(sum(2, 3)).to.equal(5)
            })
            it('should return 1', () => {
                expect(sum(1, 0)).to.equal(1)
            })
        })
        describe('even numbers', () => {
            it('should return 4', () => {
                expect(sum(2, 2)).to.equal(4)
            })
        })
        it('should return 0', () => {
            expect(sum(4, 4)).to.equal(8)
        })
    })

    describe('multiply', () => {
        it('should return 0', () => {
            expect(multiply(0, 1)).to.equal(0)
        })

        it('should return 9', () => {
            expect(multiply(3, 3)).to.equal(9)
        })
    })

})