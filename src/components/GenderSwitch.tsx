import * as React from 'react';
import {View, Pressable} from 'react-native';
import {View as MView} from 'moti';
import {Easing} from 'react-native-reanimated';

const SIZE = 60;
const TRACK_SIZE = SIZE * 1.5;
const TRACK_HEIGHT = SIZE * 0.4;
const transition = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};
const GenderSwitch = ({size = SIZE, onPress, isActive}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <MView
          from={{backgroundColor: isActive ? 'deeppink' : 'dodgerblue'}}
          animate={{backgroundColor: isActive ? 'deeppink' : 'dodgerblue'}}
          transition={transition}
          style={{
            position: 'absolute',
            width: TRACK_SIZE,
            elevation: 5,
            height: TRACK_HEIGHT,
            borderRadius: TRACK_HEIGHT,
          }}
        />
        <MView
          transition={transition}
          from={{
            translateX: isActive ? TRACK_SIZE / 4 : -TRACK_SIZE / 4,
          }}
          animate={{
            translateX: isActive ? TRACK_SIZE / 4 : -TRACK_SIZE / 4,
          }}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE,
            elevation: 5,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MView
            transition={transition}
            from={{
              width: isActive ? 0 : SIZE * 0.6,
              borderColor: isActive ? 'deeppink' : 'dodgerblue',
            }}
            animate={{
              width: isActive ? 0 : SIZE * 0.6,
              borderColor: isActive ? 'deeppink' : 'dodgerblue',
            }}
            style={{
              width: SIZE * 0.6,
              height: SIZE * 0.6,
              borderRadius: SIZE * 0.6,
              borderWidth: SIZE * 0.1,
            }}
          />
        </MView>
      </View>
    </Pressable>
  );
};
export default GenderSwitch;