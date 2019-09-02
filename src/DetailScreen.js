import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SharedElement} from 'react-navigation-sharedelement';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCCCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
  },
});

export class DetailScreen extends React.Component {
  static sharedElements = () => [{id: 'yo', animation: 'fade'}];

  render() {
    return (
      <View style={styles.container}>
        <SharedElement id="yo">
          <Text style={styles.text}>Transition that</Text>
        </SharedElement>
      </View>
    );
  }
}
