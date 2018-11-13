import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/Home';
import DetailsScreen from '../components/Details';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class Routers extends React.Component {
  render() {
    return <RootStack />;
  }
}
