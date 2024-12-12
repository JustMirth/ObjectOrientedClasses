//Part 1
class Product {
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
    //Part 3
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

//Part 2
class PerishableProduct extends Product {
    constructor (name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
const Perishable1 = PerishableProduct ("Apple", 2.50, 50, "2024-12-18");
const Perishable2 = PerishableProduct ("Milk", 1.50, 10, "2024-12-31");

//Part 4
class Store {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

//Part 5
const product1 = Product ("Gum", 0.99, 250);
const product2 = Product ("Chocolate Bar", 1.99, 50);
const product3 = Product ("Gatorade", 2.99, 75);
const product4 = PerishableProduct ("Apple", 2.50, 50, "2024-12-18");
const product5 = PerishableProduct ("Milk", 1.50, 10, "2024-12-31");

const store = new Store();
