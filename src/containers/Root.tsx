import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

import {CommentaryTimeline, KeyMomentsModal} from '../components';
import * as T from '../styles/typography';

const RootScreen = () => {
  const [eventChosen, setEventChosen] = useState(0);

  const handlePress = (index: number) => {
    setEventChosen(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <T.H1 center>Live Commentary</T.H1>
      <CommentaryTimeline chosenEvent={eventChosen} />
      <KeyMomentsModal handlePress={handlePress} />
    </SafeAreaView>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
});

export default RootScreen;
