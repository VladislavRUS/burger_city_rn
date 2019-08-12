import { Categories } from '../constants/Categories';
import Product from './Product';

class Burger extends Product {
  constructor(
    public id: number,
    public price: number,
    public keyName: string,
    public imageUrl: string,
  ) {
    super(id, price, keyName, Categories.BURGER, imageUrl);
  }
}

export default Burger;
