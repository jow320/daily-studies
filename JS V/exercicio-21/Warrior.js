const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, lifePoints, attack, defense, ShieldPoints) {
    super(name, lifePoints, attack, defense);
    this.ShieldPoints = ShieldPoints;
    this.defPosition = false;
  }
  changePosition() {
    if (this.defPosition === false) {
      this.defPosition = true;
      this.defense += this.ShieldPoints;
    } else {
      this.defPosition = false;
      this.defense -= this.ShieldPoints;
    }
  }
}

module.exports = Warrior;
