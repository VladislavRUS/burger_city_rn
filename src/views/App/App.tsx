import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { BurgerIcon } from '../../components/Icons/BurgerIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import TrackIcon from '../../components/Icons/TrackIcon/TrackIcon';
import WalletIcon from '../../components/Icons/WalletIcon/WalletIcon';
import { TabBar } from '../../components/TabBar';
import { Routes } from '../../constants/Routes';
import { Address } from '../Address';
import { Burgers } from '../Burgers';
import { Cart } from '../Cart';
import { Customize } from '../Customize';
import { DateTime } from '../DateTime';
import { DeliveryDetails } from '../DeliveryDetails';
import { Home } from '../Home';
import { Order } from '../Order';
import { Start } from '../Start';
import Track from '../Track/Track';
import { Wallet } from '../Wallet';

const tabBarOptions = {
  showLabel: false,
  style: {
    height: 87,
  },
};

const stackNavigatorOptions = {
  cardStyle: {
    backgroundColor: 'rgb(245, 245, 247)',
  },
};

const commonStack = {
  [Routes.CUSTOMIZE]: {
    screen: Customize,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.CART]: {
    screen: Cart,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.DELIVERY_DETAILS]: {
    screen: DeliveryDetails,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.ADDRESS]: {
    screen: Address,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.DATE_TIME]: {
    screen: DateTime,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.ORDER]: {
    screen: Order,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
};

const HomeNavigator = createStackNavigator({
  [Routes.HOME]: {
    screen: Home,
  },
  ...commonStack,
});

HomeNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar isFocused={focused} titleKey={'app.home'} icon={HomeIcon} />
    ),
  };
};

const BurgersNavigator = createStackNavigator(
  {
    [Routes.BURGERS]: {
      screen: Burgers,
    },
    ...commonStack,
  },
  stackNavigatorOptions,
);

BurgersNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar isFocused={focused} titleKey={'app.burgers'} icon={BurgerIcon} />
    ),
  };
};

const TrackNavigator = createStackNavigator(
  {
    [Routes.TRACK]: {
      screen: Track,
    },
    ...commonStack,
  },
  stackNavigatorOptions,
);

TrackNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar
        isFocused={focused}
        titleKey={'app.trackOrders'}
        icon={TrackIcon}
      />
    ),
  };
};

const WalletNavigator = createStackNavigator(
  {
    [Routes.WALLET]: {
      screen: Wallet,
    },
    ...commonStack,
  },
  stackNavigatorOptions,
);

WalletNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar isFocused={focused} titleKey={'app.wallet'} icon={WalletIcon} />
    ),
  };
};

const MainNavigator = createBottomTabNavigator({
  [Routes.HOME_NAVIGATOR]: {
    screen: HomeNavigator,
  },
  [Routes.BURGERS_NAVIGATOR]: {
    screen: BurgersNavigator,
  },
  [Routes.TRACK_NAVIGATOR]: {
    screen: TrackNavigator,
  },
  [Routes.WALLET_NAVIGATOR]: {
    screen: WalletNavigator,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    [Routes.START]: {
      screen: Start,
    },
    [Routes.MAIN_NAVIGATOR]: {
      screen: MainNavigator,
    },
  },
  {
    initialRouteName: Routes.START,
  },
);

export default createAppContainer(AppNavigator);
