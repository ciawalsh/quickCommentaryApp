import React, {useState, useEffect, useCallback} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

import * as T from '../../styles/typography';
import brandGuide from '../../styles/brandGuide';

interface Props {
  event: CommentaryEvent;
  chosenEvent: number;
}

const Event = ({event, chosenEvent}: Props) => {
  const [colorValue] = useState(new Animated.Value(300));

  let backgroundColor = colorValue.interpolate({
    inputRange: [0, 180, 300],
    outputRange: [
      'rgba(255,255,255, 1)',
      'rgba(255,255,0, 1)',
      'rgba(255,255,255, 1)',
    ],
  });

  const startFade = useCallback(() => {
    let toValue = 300;
    if (chosenEvent === event.id) {
      toValue = 0;
    }
    Animated.timing(colorValue, {
      toValue: toValue,
      duration: 3000,
    }).start();
  }, [chosenEvent, colorValue, event.id]);

  useEffect(() => {
    startFade();
  }, [chosenEvent, startFade]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor:
            chosenEvent === event.id ? backgroundColor : brandGuide.greys.white,
        },
      ]}>
      <View style={styles.leftHandSide}>
        <View style={styles.timelineCircle}>
          <T.S1>{event.minute}</T.S1>
        </View>
      </View>
      <View style={styles.rightHandSide}>
        <T.B1>{event.description}</T.B1>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  leftHandSide: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHandSide: {
    width: '75%',
  },
  timelineCircle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderColor: brandGuide.greys.darkest,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Event;
