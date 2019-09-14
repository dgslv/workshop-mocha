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

describe('Testing functions', () => {
    it ('should return 15', () => {
        expect(calculatePrice(items)).to.equal(15)
    })
})