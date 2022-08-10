import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Character
const player1 = new Character('Beyoncé');
const player2 = new Character('Kelly Rowland');
const player3 = new Character('Michelle Williams');

player1.levelUp();
player1.levelUp();
player1.levelUp();

// Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// PVP
const pvp = new PVP(player2, player3);

// PVE
const pve = new PVE(player2, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
