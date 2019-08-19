import Burger from '../models/Burger';
import Combo from '../models/Combo';
import Drink from '../models/Drink';
import OrderPayment from '../models/OrderPayment';
import Snack from '../models/Snack';
import * as Images from './images';

class Mock {
  public static burgers: Burger[] = [
    new Burger(1, 13, 'burgers.burger_1', Images.burger_1),
    new Burger(2, 15, 'burgers.burger_2', Images.burger_2),
    new Burger(3, 11, 'burgers.burger_3', Images.burger_3),
    new Burger(4, 10, 'burgers.burger_4', Images.burger_4),
    new Burger(5, 19, 'burgers.burger_5', Images.burger_5),
    new Burger(6, 18, 'burgers.burger_6', Images.burger_6),
    new Burger(7, 15, 'burgers.burger_7', Images.burger_7),
  ];

  public static snacks: Snack[] = [
    new Snack(1, 50, 'snacks.snack_1', Images.snack_1),
    new Snack(2, 30, 'snacks.snack_2', Images.snack_2),
  ];

  public static drinks: Drink[] = [
    new Drink(1, 25, 'drinks.drink_1', Images.drink_1),
  ];

  public static combos: Combo[] = [
    new Combo(1, 100, 'combos.combo_1', Images.combo_1, [
      Mock.burgers[0],
      Mock.snacks[0],
      Mock.drinks[0],
    ]),
    new Combo(2, 180, 'combos.combo_2', Images.combo_2, [
      Mock.burgers[1],
      Mock.snacks[Mock.snacks.length - 1],
      Mock.drinks[0],
    ]),
    new Combo(3, 250, 'combos.combo_3', Images.combo_3, [
      Mock.burgers[2],
      Mock.snacks[0],
      Mock.drinks[0],
    ]),
    new Combo(4, 250, 'combos.combo_4', Images.combo_4, [
      Mock.burgers[3],
      Mock.snacks[Mock.snacks.length - 1],
      Mock.drinks[0],
    ]),
  ];

  public static orderPayments: OrderPayment[] = [
    new OrderPayment('M Wallet'),
    new OrderPayment('Google Pay'),
    new OrderPayment('Apple Pay'),
    new OrderPayment('Samsung Pay '),
  ];
}

export default Mock;
