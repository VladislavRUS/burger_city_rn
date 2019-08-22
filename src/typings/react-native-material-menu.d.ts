/* tslint:disable */

declare module 'react-native-material-menu' {
  import React from 'react';

  export interface IMenuProps {
    ref: any;
  }

  export interface IMenuItemProps {
    onPress: () => void;
    style?: any;
  }

  export default class Menu extends React.Component<IMenuProps> {}
  export class MenuItem extends React.Component<IMenuItemProps> {}
}
