import React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Fake Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Fake Home</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
