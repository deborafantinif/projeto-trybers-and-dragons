import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static countNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.countNecromancer;
  }
}