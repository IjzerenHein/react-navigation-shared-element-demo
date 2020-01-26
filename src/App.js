import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import {MainScreen} from './MainScreen';
import {DetailScreen} from './DetailScreen';
import {ModalScreen} from './ModalScreen';
import Icon from 'react-native-vector-icons/Ionicons';

enableScreens();

const StackNavigator1 = createSharedElementStackNavigator(
  {
    Main: MainScreen,
    Detail: DetailScreen,
  },
  undefined,
  {
    name: 'StackNavigator1',
  },
);

const StackNavigator2 = createSharedElementStackNavigator(
  {
    Main: {
      screen: props => <MainScreen {...props} modal />,
    },
  },
  undefined,
  {
    name: 'StackNavigator2',
  },
);

const TabNavigator = createBottomTabNavigator({
  Tab1: {
    screen: StackNavigator1,
    navigationOptions: {
      title: 'Stack',
      tabBarIcon: props => (
        <Icon name="md-arrow-forward" size={20} color={props.tintColor} />
      ),
    },
  },
  Tab2: {
    screen: StackNavigator2,
    navigationOptions: {
      title: 'Modal',
      tabBarIcon: props => (
        <Icon name="md-arrow-up" size={20} color={props.tintColor} />
      ),
    },
  },
});

const RootModalStackNavigator = createSharedElementStackNavigator(
  {
    Tabs: TabNavigator,
    Modal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
  {
    name: 'ModalStack',
  },
);

export default createAppContainer(RootModalStackNavigator);
//export default createAppContainer(StackNavigator1);
