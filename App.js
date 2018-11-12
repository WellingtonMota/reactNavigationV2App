import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import DetailsScreen from './src/components/Details';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}