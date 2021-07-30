import * as React from 'react';
import {
  StatusBar,
  Animated,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import NavButton from '../../components/NavigationButton';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const bgs = ['#e2eafc', '#e2eafc', '#e2eafc', '#e2eafc'];
const DATA = [
  {
    key: '3571572',
    title: 'Welcome to Verse! \n Your social learning platform',
    image: 'https://image.flaticon.com/icons/png/512/4219/4219791.png',
  },
  {
    key: '3571747',
    title: 'Discover learning focused Communities',
    image: 'https://image.flaticon.com/icons/png/512/3010/3010885.png',
  },
  {
    key: '3571680',
    title: 'Learn and Interact with the best Educators',
    image: 'https://image.flaticon.com/icons/png/512/2436/2436654.png',
  },
  {
    key: '3571603',
    title: 'Connect with peers and Boost your scores',
    image: 'https://image.flaticon.com/icons/png/512/4297/4297861.png',
  },
];

export default function Welcome() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('Phone');
  };
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const inputRange = DATA.map((_, i) => i * width);
  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: bgs,
  });

  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['45deg', '-45deg', '45deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor,
          },
        ]}
      />
      <Animated.View
        style={{
          width: height * 0.65,
          height: height * 0.65,
          borderRadius: 220,
          backgroundColor: 'rgba(255,255,255,0.9)',
          position: 'absolute',
          top: -height * 0.2,
          left: -height * 0.1,
          transform: [
            {
              translateX,
            },
            {
              rotate,
            },
          ],
        }}
      />

      <Animated.FlatList
        data={DATA}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        style={{paddingBottom: height * 0.25}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        keyExtractor={item => item.key}
        pagingEnabled
        horizontal
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                height: '95%',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{padding: 20}}>
                <Text
                  style={{
                    color: '#1E2022',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 28,
                    paddingVertical: 10,
                  }}
                  numberOfLines={2}
                  adjustsFontSizeToFit>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: height * 0.25,
          padding: 20,
          width,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          {DATA.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [1, 1.5, 1],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 10,
                  margin: 6,
                  opacity,
                  backgroundColor: '#414757',
                  transform: [
                    {
                      scale,
                    },
                  ],
                }}
              />
            );
          })}
        </View>

        <NavButton onPress={submitHandler} text="Continue with Phone" />
      </View>
    </View>
  );
}
