import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(
    private _name: string,
  ) {
    this._cost = 0;
    this._special = 0;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  get name() {
    return this._name;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}