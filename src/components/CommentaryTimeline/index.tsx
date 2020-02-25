import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, ViewStyle} from 'react-native';

import commentary from '../../data/commentary.json';
import {CommentaryEvent} from '../../components';

const fakeApiCall = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

interface Props {
  chosenEvent: number;
}

const CommentaryTimeline = ({chosenEvent}: Props) => {
  const [loading, setLoading] = useState(false);
  let flatlist = React.useRef<FlatList<CommentaryEvent>>(null);

  const onRefresh = () => {
    setLoading(true);
    let data = fakeApiCall(2000);
    data.then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  useEffect(() => {
    scrollToIndex(chosenEvent === 0 ? chosenEvent : chosenEvent - 1);
  }, [chosenEvent]);

  const scrollToIndex = (index: number) => {
    // @ts-ignore
    flatlist.scrollToIndex({animated: true, index});
  };

  return (
    <FlatList
      ref={ref => {
        // @ts-ignore
        flatlist = ref;
      }}
      style={styles.flatlist}
      onRefresh={onRefresh}
      refreshing={loading}
      data={commentary}
      keyExtractor={(item: CommentaryEvent) => String(item.id)}
      renderItem={({item}: {item: CommentaryEvent}) => (
        <CommentaryEvent event={item} chosenEvent={chosenEvent} />
      )}
    />
  );
};

interface Style {
  flatlist: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  flatlist: {flex: 1, marginBottom: 60},
});

export default CommentaryTimeline;
