const expect = require('chai').expect;

const {
    calculatePrice,
} = require('../../sources/functions');

const bolacha = {
    price: 10
}

const carne = {
    price: 25
}

const produtos = [
    bolacha,
    carne,
]

const maca = {
    price: 5
}

const cart2 = [
    ...produtos,
    maca,
    { price: 30 },
    { price: 100 },
    { price: 77 }
]

describe('Testing calculate price', () => {
    it('should return price 10', done => {
        const price = calculatePrice([bolacha]);
        expect(price).to.be.equal(10)
        done();
    })

    it('should return price 25', done => {
        const price = calculatePrice([carne]);
        expect(price).to.be.equal(25)
        done();
    })

    it('should return price 35', done => {
        const price = calculatePrice(produtos);
        expect(price).to.be.equal(35)
        done();
    })

    it('should return price 147', done => {
        const price = calculatePrice(cart2);
        expect(price).to.be.equal(247)
        done();
    })
})
