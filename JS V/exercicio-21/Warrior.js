const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, lifePoints, attack, defense, ShieldPoints) {
    super(name, lifePoints, attack, defense);
    this.ShieldPoints = ShieldPoints;
    this.defPosition = false;
    this.stance = "attacking";
  }
  changePosition() {
    if (this.defPosition === false) {
      this.defPosition = true;
      this.defense += this.ShieldPoints;
      this.stance = "deffending";
    } else {
      this.defPosition = false;
      this.defense -= this.ShieldPoints;
      this.stance = "attacking";
    }
  }
  attackAction(defendingCharacter) {
    if (this.defPosition === true) {
      console.log(`${this.name} is on defense position and cannot attack!`);
    } else {
      super.attackAction(defendingCharacter);
    }
  }
}

module.exports = Warrior;
