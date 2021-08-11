import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
export const calc = (prop: 'width' | 'height', value: number) => {
  const myHeight = 806;
  const myWidth = 392;
  const factor = prop === 'width' ? myWidth : myHeight;
  const multiply = prop === 'height' ? height : width;
  return (value * multiply) / factor;
};
