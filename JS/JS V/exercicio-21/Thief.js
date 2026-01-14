const Character = require("./Character.js");

class Thief extends Character {
  attackAction(defendingCharacter) {
    defendingCharacter.lifePoints =
      defendingCharacter.lifePoints -
      2 * (this.attack - defendingCharacter.defense);
  }
}

module.exports = Thief;
