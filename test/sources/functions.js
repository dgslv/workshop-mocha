const expect = require('chai').expect;
const {
    calculatePrice
} = require('../../sources/functions');

const items = [ 
    {
        title: 'Apple',
        price: 5
    },
    {
        title: 'Pineapple',
        price: 8
    },
    {
        title: 'Orange',
        price: 2
    }
]

const basket = [
    {
        title: 'Apple',
        price: 5
    }
]

const basket_two = [
    {
        title: 'Pineapple',
        price: 8
    },
    {
        title: 'Orange',
        price: 2
    }
]
describe('Testing functions', () => {
    it ('should return 15', () => {
        expect(calculatePrice(items)).to.equal(15)
    })

    it ('should return 5', () => {
        expect(calculatePrice(basket)).to.equal(5)
    })

    it ('should return 10', () => {
        expect(calculatePrice(basket_two)).to.equal(10)
    })

})