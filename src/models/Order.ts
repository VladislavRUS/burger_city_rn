import { observable } from 'mobx';
import AddressDescription from './AddressDescription';
import ProductOrder from './ProductOrder';

class Order {
  public productOrders: ProductOrder[];
  public isInAdvance: boolean;
  public isConfirmed: boolean;
  @observable
  public dateTime: Date;
  @observable
  public addressDescription: AddressDescription | null;

  constructor() {
    this.productOrders = [];
    this.dateTime = new Date();
    this.isInAdvance = false;
    this.isConfirmed = false;
    this.addressDescription = null;
  }

  public addProductOrder(newProductOrder: ProductOrder) {
    const existingProduct = this.productOrders.find(productOrder => {
      const isEqualCategory =
        productOrder.product.category === newProductOrder.product.category;
      const isEqualId = productOrder.product.id === newProductOrder.product.id;
      return isEqualCategory && isEqualId;
    });

    if (existingProduct) {
      existingProduct.quantity += newProductOrder.quantity;
    } else {
      this.productOrders.push(newProductOrder);
    }
  }

  public fromOrder(order: Order) {
    const newOrder = new Order();
    newOrder.productOrders = order.productOrders.slice();
    newOrder.dateTime = order.dateTime;
    newOrder.isInAdvance = order.isInAdvance;
    this.productOrders = order.productOrders.slice();
    return newOrder;
  }
}

export default Order;
