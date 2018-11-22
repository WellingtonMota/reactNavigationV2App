import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ButtonHeader from '../../components/ButtonHeader';

export default class Cards extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MainCards Screen</Text>
        <ButtonHeader propsNavigation={this.props} />
      </View>
    );
  }
}
