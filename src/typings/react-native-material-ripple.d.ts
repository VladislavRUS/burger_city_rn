declare module 'react-native-material-ripple' {
  import React from 'react';

  export interface IReactNativeMaterialRipple {
    onPress: () => void;
    disabled: boolean;
  }

  export default class ReactNativeMaterialRipple extends React.Component<
    IReactNativeMaterialRipple
  > {}
}
