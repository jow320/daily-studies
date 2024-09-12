import { Spaceship } from "./export";
import * as lodash from "lodash";

interface BattleSpaceShip extends Spaceship {
  weapons: number;
}

let xWing: BattleSpaceShip = {
  name: "X-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4,
};

console.log(lodash.camelCase(xWing.pilot));
console.log(lodash.kebabCase(xWing.pilot));
