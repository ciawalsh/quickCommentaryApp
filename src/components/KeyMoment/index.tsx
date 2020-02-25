import React from 'react';
import {StyleSheet, ViewStyle, TouchableOpacity, View} from 'react-native';

import * as T from '../../styles/typography';

interface Props {
  minute: CommentaryEvent['minute'];
  event: CommentaryEvent['type'];
  handlePress: () => void;
}

const KeyMoment = ({minute, event, handlePress}: Props) => {
  return (
    <TouchableOpacity style={styles.keyMoment} onPress={handlePress}>
      <View style={styles.keyMomentLeft}>
        <T.B1 bold>{minute}</T.B1>
      </View>
      <View style={styles.keyMomentRight}>
        <T.B1>{event}</T.B1>
      </View>
    </TouchableOpacity>
  );
};

interface Styles {
  keyMoment: ViewStyle;
  keyMomentLeft: ViewStyle;
  keyMomentRight: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  keyMoment: {
    flexDirection: 'row',
    margin: 4,
  },
  keyMomentLeft: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyMomentRight: {
    width: '75%',
    justifyContent: 'center',
  },
});

export default KeyMoment;
