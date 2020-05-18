const calculatePrice = (items) => {
    return items
        .reduce((totalPrice, item) => {
            return totalPrice += item.price;
        }, 0)
}

module.exports = {
    calculatePrice,
}