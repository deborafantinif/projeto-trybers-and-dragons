import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static countElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countElf += 1;
  }

  static createdRacesInstances() {
    return Elf.countElf;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;