class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  pricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 30000);
const aHouse = new House(120, 200000);

console.log(land);
console.log(aHouse);
console.log(aHouse.pricePerSquareMeter());

class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }
  getFloor() {
    return this.number.slice(0, -2);
  }
}

const myApt = new Apartment("203", 200, 160000);

console.log(myApt);
console.log(myApt.getFloor());
console.log(myApt.pricePerSquareMeter());
