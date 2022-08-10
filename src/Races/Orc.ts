import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static countOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrc += 1;
  }

  static createdRacesInstances() {
    return Orc.countOrc;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;