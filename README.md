# react-navigation-sharedelement-rn60test

A simple app that demonstrates how to use [react-native-shared-element](https://github.com/IjzerenHein/react-native-shared-element) and [React Navigation binding](https://github.com/IjzerenHein/react-navigation-sharedelement) in react-native v0.60.

## Usage

```sh
# Installation
yarn install
cd ios && pod install && cd ..

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android
```

## Example code

**App.js**

```js
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-sharedelement';
import {useScreens} from 'react-native-screens';
import {MainScreen} from './MainScreen';
import {DetailScreen} from './DetailScreen';

useScreens();

// Instead of calling `createStackNavigator`, wrap it using `createSharedElementStackNavigator`
const StackNavigator = createSharedElementStackNavigator(createStackNavigator, {
  Main: MainScreen,
  Detail: DetailScreen,
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
```

**Main.js**

```js
import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-sharedelement';

const styles = StyleSheet.create({..})

export class MainScreen extends React.Component {
  render() {
    // Wrap the component that you want to transition in <SharedElement>
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <SharedElement id="yo">
            <Text style={styles.text}>Transition this</Text>
          </SharedElement>
        </TouchableOpacity>
      </View>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('Detail');
  };
}
```

**Detail.js**

```js
import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-sharedelement';

const styles = StyleSheet.create({..});

export const DetailScreen = ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <SharedElement id="yo">
        <Text style={styles.text}>Transition that</Text>
      </SharedElement>
    </TouchableOpacity>
  </View>
);

// Add the `sharedElements` function to the component, which
// returns a list of shared-elements to transition
DetailScreen.sharedElements = () => [{id: 'yo', animation: 'fade'}];
```

## Libraries used

- react-native@0.60.5
- react-navigation@4.0.0
- react-navigation-stack@1.5.1
- react-native-gesture-handler@1.4.1,
- react-native-screens@1.0.0-alpha.23
