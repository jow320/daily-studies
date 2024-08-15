const Character = require("./Character.js");
const Thief = require("./Thief.js");
const Mage = require("./Mage.js");
const Warrior = require("./Warrior.js");

const baseCharacter = new Character("John Doe", 100, 50, 25);
const thief = new Thief("Thief", 100, 50, 25);
const mage = new Mage("Mage", 100, 50, 25, 50);
const warrior = new Warrior("Warrior", 100, 50, 25, 25);

// console.log(baseCharacter);
// thief.attackAction(baseCharacter);
// console.log(baseCharacter);
// Thief working! /\

// console.log(baseCharacter);
// mage.attackAction(baseCharacter);
// console.log(baseCharacter);
// mage.heal(baseCharacter);
// console.log(baseCharacter);
// Mage Working! /\ Attack and Heal

// console.log(warrior);
// warrior.changePosition();
// console.log(warrior);
// warrior.changePosition();
// console.log(warrior);
// Warrior Working! /\ Changing positions!
