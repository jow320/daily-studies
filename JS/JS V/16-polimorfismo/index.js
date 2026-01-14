class Vehicle {
  move() {
    console.log("O veiculo está se movendo.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O návio está se movendo.");
  }
}

class Airplane extends Vehicle {
  move(speed) {
    console.log(`O avião está se movendo a ${speed} KM/H`);
  }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Airplane();

// delorean.move();
// blackPearl.move();
// epoch.move(80);

function start(vehicle) {
  console.log("Iniciando o veículo!");
  vehicle.move();
}

start(delorean);
start(blackPearl);
start(epoch);
