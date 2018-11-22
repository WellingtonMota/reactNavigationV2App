import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class ButtonHeader extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.propsNavigation.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}
