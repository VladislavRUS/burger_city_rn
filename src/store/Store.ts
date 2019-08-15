import { action, observable } from 'mobx';
import Burger from '../models/Burger';
import Combo from '../models/Combo';

class Store {
  public currentBurger: Burger | null = null;
  public currentCombo: Combo | null = null;

  @observable
  public isRemember: boolean = false;

  @action
  public toggleRemember() {
    this.isRemember = !this.isRemember;
  }

  public setCurrentBurger(burger: Burger) {
    this.currentBurger = burger;
    this.currentCombo = null;
  }

  public setCurrentCombo(combo: Combo) {
    this.currentCombo = combo;
    this.currentBurger = null;
  }
}

export default new Store();
