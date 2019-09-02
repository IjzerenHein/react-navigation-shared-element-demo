import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-sharedelement';
import {useScreens} from 'react-native-screens';
import {MainScreen} from './MainScreen';
import {DetailScreen} from './DetailScreen';

useScreens();

const StackNavigator = createSharedElementStackNavigator(createStackNavigator, {
  Main: MainScreen,
  Detail: DetailScreen,
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
