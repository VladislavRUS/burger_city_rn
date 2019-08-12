import { Categories } from '../constants/Categories';
import Product from './Product';

class Drink extends Product {
  constructor(
    public id: number,
    public price: number,
    public keyName: string,
    public imageUrl: string,
  ) {
    super(id, price, keyName, Categories.DRINK, imageUrl);
  }
}

export default Drink;
