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
});

export class MainScreen extends React.Component {
  render() {
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
