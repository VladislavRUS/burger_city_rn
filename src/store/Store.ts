import { action, observable } from 'mobx';

class Store {
  @observable
  public isRemember: boolean = false;

  @action
  public toggleRemember() {
    this.isRemember = !this.isRemember;
  }
}

export default new Store();
