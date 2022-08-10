import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static countRanger = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.countRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger.countRanger;
  }
}