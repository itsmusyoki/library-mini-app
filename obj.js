const car = {
    make:"benz",
    year: 2026,
    color: "blue",
    priceUSD: 40000,

    applyDiscount: function(discountPercentage) {
        const multiplier = 1- discountPercentage/100;
        this.priceUSD *= multiplier;
    },

    getSummary() {
        return `The inventory is ${this.car} from ${this.year} ${this.color}, priced at $${this.priceUSD} (USD).`
    },

}
car.applyDiscount(50)
console.log(car.getSummary())