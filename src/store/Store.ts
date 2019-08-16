import { action, computed, observable } from 'mobx';
import { Durations } from '../constants/Durations';
import Burger from '../models/Burger';
import Combo from '../models/Combo';
import Order from '../models/Order';
import ProductOrder from '../models/ProductOrder';
import { delay } from '../utils/delay';

class Store {
  public currentBurger: Burger | null = null;
  public currentCombo: Combo | null = null;
  public confirmedOrder: Order | null = null;
  @observable
  public isRemember: boolean = false;
  @observable
  public order: Order;

  @computed
  get totalPrice() {
    let sum = 0;
    this.order.productOrders.forEach(productOrder => {
      sum += productOrder.product.price;
    });

    return sum;
  }

  constructor() {
    this.order = new Order();
  }

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

  @action
  public async addToCart(productOrder: ProductOrder): Promise<void> {
    await delay(Durations.REQUEST_DURATION);
    if (this.confirmedOrder !== null) {
      this.confirmedOrder = null;
    }

    this.order.addProductOrder(productOrder);
  }
}

export default new Store();
