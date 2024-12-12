//Part 1
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity
    }
    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}
//Part 2
class PerishableProductProperties extends ProductProperties {
    constructor (name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
const Perishable1 = PerishableProductProperties ("Apple", 2.50, 50, "2024-12-18");
const Perishable2 = PerishableProductProperties ("Milk", 1.50, 10, "2024-12-31");