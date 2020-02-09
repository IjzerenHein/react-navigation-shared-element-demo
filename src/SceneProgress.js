/*import * as React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {CardAnimationContext} from 'react-navigation-stack';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 50,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'purple',
    height: 60,
  },
});*/

export const SceneProgress = () => {
  return null;
  /*return (
    <View style={styles.container} pointerEvents="none">
      <CardAnimationContext.Consumer>
        {value => {
          //console.log(value);
          return (
            <Animated.View
              style={[
                styles.content,
                {
                  opacity: value.current.progress,
                },
              ]}
            />
          );
        }}
      </CardAnimationContext.Consumer>
    </View>
  );*/
};
