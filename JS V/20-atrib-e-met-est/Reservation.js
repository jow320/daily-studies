class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }
  static baseFee = 150; //atributo est

  static showBaseFee() {
    console.log(`Base Fee is ${Reservation.baseFee}`);
  } // metodo est

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, "201", 5);

console.log(r1);

const r2 = new Reservation(2, "102", 2);

console.table(r2);

console.log(Reservation.premiumFee);

Reservation.baseFee = 200; // mudando a base fee aqui fará o premiumFee também mudar seu valor estático visto que o premiumFee é baseado nele.

console.log(Reservation.premiumFee);
