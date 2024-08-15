const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, lifePoints, attack, defense, magicalPoints) {
    super(name, lifePoints, attack, defense);
    this.magicalPoints = magicalPoints;
  }
  attackAction(defendingCharacter) {
    defendingCharacter.lifePoints =
      defendingCharacter.lifePoints -
      (this.attack + this.magicalPoints - defendingCharacter.defense);
  }
  heal(healedCharacter) {
    healedCharacter.lifePoints =
      healedCharacter.lifePoints + this.magicalPoints * 2;
  }
}

module.exports = Mage;
