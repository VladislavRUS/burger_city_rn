import React from 'react';
import { Text, View } from 'react-native';

class Burgers extends React.Component {
  public static navigationOptions = {
    title: 'Burger City',
  };

  public render() {
    return (
      <View>
        <Text>Burgers</Text>
      </View>
    );
  }
}

export default Burgers;
