class Character {
  constructor(name, lifePoints, attack, defense) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attack = attack;
    this.defense = defense;
  }
  attackAction(defendingCharacter) {
    defendingCharacter.lifePoints =
      defendingCharacter.lifePoints -
      (this.attack - defendingCharacter.defense);
  }
}

module.exports = Character;
