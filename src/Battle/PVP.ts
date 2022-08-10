import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: SimpleFighter,
    private _player2: SimpleFighter,
  ) {
    super(_player1);
  }

  fight(): number {
    if (this._player1.lifePoints === -1) return -1;
    while (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}