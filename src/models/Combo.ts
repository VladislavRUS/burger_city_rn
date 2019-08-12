import { Categories } from '../constants/Categories';
import Product from './Product';

class Combo extends Product {
  constructor(
    public id: number,
    public price: number,
    public keyName: string,
    public imageUrl: string,
    public products: Product[],
  ) {
    super(id, price, keyName, Categories.COMBO, imageUrl);
    this.products = products;
  }
}

export default Combo;
