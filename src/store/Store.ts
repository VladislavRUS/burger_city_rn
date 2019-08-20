import { action, computed, observable } from 'mobx';
import Api from '../api/Api';
import { Durations } from '../constants/Durations';
import AddressDescription from '../models/AddressDescription';
import Burger from '../models/Burger';
import Combo from '../models/Combo';
import Order from '../models/Order';
import OrderPayment from '../models/OrderPayment';
import ProductOrder from '../models/ProductOrder';
import { delay } from '../utils/delay';
import Mock from './Mock';

class Store {
  public currentBurger: Burger | null = null;
  public currentCombo: Combo | null = null;
  public confirmedOrder: Order | null = null;
  @observable
  public isRemember: boolean = false;
  @observable
  public order: Order;
  @observable
  public orderPayment: OrderPayment;
  public orderPayments: OrderPayment[];
  private apiKey!: string;

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
    this.orderPayments = Mock.orderPayments;
    this.orderPayment = this.orderPayments[0];
  }

  public init(config: any) {
    this.apiKey = config.apiKey;
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

  @action
  public setAddress(addressDescription: AddressDescription) {
    this.order.addressDescription = addressDescription;
  }

  public async findPlace(input: string) {
    const descriptions: AddressDescription[] = [];

    const json = await Api.findPlace(input, this.apiKey);
    const predictions = json.predictions;
    predictions.forEach((prediction: any) => {
      descriptions.push(AddressDescription.fromJson(prediction));
    });

    return descriptions;
  }

  @action
  public setOrderDateTime(date: Date) {
    this.order.dateTime = date;
  }

  @action
  public setOrderPayment(orderPayment: OrderPayment) {
    this.orderPayment = orderPayment;
  }

  @action
  public async confirmOrder() {
    await delay(Durations.REQUEST_DURATION);
    this.order.isConfirmed = true;
    this.confirmedOrder = Order.fromOrder(this.order);
    this.order = new Order();
  }
}

export default new Store();
