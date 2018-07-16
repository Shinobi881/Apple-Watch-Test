import React, { Component } from 'react';
import { View, Text } from 'react-native';
import initHealthKit from './utils';

// Initialize the apple health kit
initHealthKit();

type State = {
  testData: string,
};

class HealthComponent extends Component<{}, State> {
  state = { testData: 'React app view' };

  render() {
    const { testData } = this.state;

    return (
      <View>
        <Text>{testData}</Text>
      </View>
    );
  }
}

HealthComponent.displayName = 'HealthComponent';

export default HealthComponent;
