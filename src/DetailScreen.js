import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-sharedelement';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export const DetailScreen = ({navigation}) => (
  <View style={styles.container}>
    <SharedElement id="image" style={StyleSheet.absoluteFill}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('./theboys.jpg')}
      />
    </SharedElement>
    <SharedElement id="text">
      <Text style={styles.text}>The Boys</Text>
    </SharedElement>
  </View>
);

DetailScreen.navigationOptions = {
  title: 'Boys will be boys',
};

// Add the `sharedElements` function to the component, which
// returns a list of shared-elements to transition
DetailScreen.sharedElements = (navigation, otherNaviation, showing) => [
  {id: 'image'},
  {id: 'text', animation: 'fade'},
];
