import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';

import brandGuide from '../../styles/brandGuide';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  iconContainer: ViewStyle;
  keyMomentsContainer: ViewStyle;
  keyMoment: ViewStyle;
  keyMomentLeft: ViewStyle;
  keyMomentRight: ViewStyle;
  icon: ImageStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: brandGuide.greys.white,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    borderTopColor: brandGuide.greys.medium,
    borderTopWidth: 1,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
  },
  iconContainer: {
    position: 'absolute',
    borderColor: brandGuide.greys.dark,
    borderWidth: 2,
    height: 34,
    width: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    top: 10,
  },
  keyMomentsContainer: {
    height: 100,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  keyMoment: {
    flexDirection: 'row',
  },
  keyMomentLeft: {
    width: '15%',
  },
  keyMomentRight: {
    width: '75%',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
