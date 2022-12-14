import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1: SimpleFighter,
    private _monster: SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    if (this._player1.lifePoints === -1) return -1;
    this._monster.forEach((monster) => {
      this._player1.attack(monster);
      monster.attack(this._player1);
    });
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}