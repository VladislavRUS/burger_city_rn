import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Routes } from '../../constants/Routes';
import { Start } from '../Start';

const AppNavigator = createStackNavigator({
  [Routes.START]: {
    screen: Start,
  },
});

export default createAppContainer(AppNavigator);
