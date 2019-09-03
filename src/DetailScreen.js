import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
