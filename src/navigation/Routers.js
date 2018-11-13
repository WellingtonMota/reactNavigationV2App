import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../Main';
import HomeScreen from '../components/Home';
import DetailsScreen from '../components/Details';

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Main',
  }
);

export default class Routers extends React.Component {
  render() {
    return <RootStack />;
  }
}
