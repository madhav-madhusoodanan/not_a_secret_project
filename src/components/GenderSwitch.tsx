import * as React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  viewOuter: {alignItems: 'center', justifyContent: 'center'},
  mViewOne: {
    position: 'absolute',
    width: TRACK_SIZE,
    elevation: 5,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT,
  },
  mViewTwo: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    elevation: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mViewThree: {
    width: SIZE * 0.6,
    height: SIZE * 0.6,
    borderRadius: SIZE * 0.6,
    borderWidth: SIZE * 0.1,
  },
});

const GenderSwitch = ({size = SIZE, onPress, isActive}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.viewOuter}>
        <MView
          from={{backgroundColor: isActive ? 'deeppink' : 'dodgerblue'}}
          animate={{backgroundColor: isActive ? 'deeppink' : 'dodgerblue'}}
          // {/* @ts-ignore */}
          transition={transition}
          style={styles.mViewOne}
        />
        <MView
          // {/* @ts-ignore */}
          transition={transition}
          from={{
            translateX: isActive ? TRACK_SIZE / 4 : -TRACK_SIZE / 4,
          }}
          animate={{
            translateX: isActive ? TRACK_SIZE / 4 : -TRACK_SIZE / 4,
          }}
          style={styles.mViewTwo}>
          <MView
            // {/* @ts-ignore */}
            transition={transition}
            from={{
              width: isActive ? 0 : SIZE * 0.6,
              borderColor: isActive ? 'deeppink' : 'dodgerblue',
            }}
            animate={{
              width: isActive ? 0 : SIZE * 0.6,
              borderColor: isActive ? 'deeppink' : 'dodgerblue',
            }}
            style={styles.mViewThree}
          />
        </MView>
      </View>
    </Pressable>
  );
};
export default GenderSwitch;
