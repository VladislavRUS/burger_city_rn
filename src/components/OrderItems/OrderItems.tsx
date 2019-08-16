import React from 'react';

import Order from '../../models/Order';
import { Wrapper } from './OrderItems.styles';
import { ProductOrderItem } from './ProductOrderItem';

interface IOrderItemsProps {
  order: Order;
}

const OrderItems: React.FC<IOrderItemsProps> = ({ order }) => (
  <Wrapper>
    {order.productOrders.map(productOrder => (
      <ProductOrderItem
        productOrder={productOrder}
        key={productOrder.product.id}
      />
    ))}
  </Wrapper>
);

export default OrderItems;
