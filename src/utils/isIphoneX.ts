import {Dimensions, Platform} from 'react-native';

const dim = Dimensions.get('screen');

interface Dimension {
  height: number;
  width: number;
}

export function isIphoneX() {
  return Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));
}

export function isIPhoneXSize(dimensions: Dimension) {
  return dimensions.height === 812 || dimensions.width === 812;
}

export function isIPhoneXrSize(dimensions: Dimension) {
  return dimensions.height === 896 || dimensions.width === 896;
}
