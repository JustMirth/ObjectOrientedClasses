class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity
    }
    stringProductProperties() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    }
}