class Product {
  constructor(nameP, description, price) {
    this.nameP = nameP;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(add) {
    const addTo = Number(add);
    this.inStock += addTo;
    console.log(`Há em estoque de ${this.nameP} a quantia de: ${this.inStock}`);
  }
  calculateDiscount(percent) {
    const discount = (percent * this.price) / 100;
    console.log(
      `O preço com o desconto de ${percent}% é R$${(
        this.price - discount
      ).toFixed(2)}`
    );
  }
}

const product1 = new Product(
  "Notebook Asus",
  "Notebook 8GB RAM, 500GB SSD",
  3000
);

product1.addToStock(3);
product1.calculateDiscount(10);
console.log(product1);
