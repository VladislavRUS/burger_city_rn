import Product from './Product';

class ProductOrder {
  constructor(public product: Product, public quantity: number) {}
}

export default ProductOrder;
