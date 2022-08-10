import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static countDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countDwarf += 1;
  }

  static createdRacesInstances() {
    return Dwarf.countDwarf;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;