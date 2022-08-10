import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static countHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countHalfling += 1;
  }

  static createdRacesInstances() {
    return Halfling.countHalfling;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;