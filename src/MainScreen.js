import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-sharedelement';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
});

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
        <Text style={styles.caption}>tap text above</Text>
      </View>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('Detail');
  };
}
