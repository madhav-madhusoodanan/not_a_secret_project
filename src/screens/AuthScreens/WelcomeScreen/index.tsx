import * as React from 'react';
import {Animated, Image, View, Dimensions, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavButton from '../../../components/Buttons/NavigationButton';
import {useNavigation} from '@react-navigation/native';

import {Theme} from '../../../constants/appTheme';
const {width, height} = Dimensions.get('screen');

const DATA = [
  {
    key: '3571572',
    title: 'Welcome to Verse! \n Your social learning app',
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

export default function WelcomeScreen() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    // @ts-ignore
    navigate('PhoneScreen');
  };
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const inputRange = DATA.map((_, i) => i * width);

  const inlineStyle = StyleSheet.create({
    outer: {
      position: 'absolute',
      bottom: 0,
      height: height * 0.25,
      padding: 20,
      width,
      justifyContent: 'space-between',
    },
    inner: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    animated: {paddingBottom: height * 0.25},
    outerAnimated: {
      width,
      justifyContent: 'center',
      height: '95%',
    },
    innerOneAnimated: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerTwoAnimated: {padding: 20},
    imageAnimated: {
      width: width / 2,
      height: width / 2,
      resizeMode: 'contain',
    },
    textAnimated: {
      color: '#1E2022',
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 28,
      paddingVertical: 10,
      fontFamily: 'Gilroy-Bold',
    },
    animatedLast: {
      width: 7,
      height: 7,
      borderRadius: 10,
      margin: 6,
      backgroundColor: '#414757',
    },
  });
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.colors.background}}>
      <Animated.FlatList
        data={DATA}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        style={inlineStyle.animated}
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
            <View style={inlineStyle.outerAnimated}>
              <View style={inlineStyle.innerOneAnimated}>
                <Image
                  source={{uri: item.image}}
                  style={inlineStyle.imageAnimated}
                />
              </View>
              <View style={inlineStyle.innerTwoAnimated}>
                <Text
                  style={inlineStyle.textAnimated}
                  numberOfLines={2}
                  adjustsFontSizeToFit>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View style={inlineStyle.outer}>
        <View style={inlineStyle.inner}>
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
                  ...inlineStyle.animatedLast,
                  opacity,
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

        <NavButton onPress={submitHandler} text="Join" />
      </View>
    </SafeAreaView>
  );
}
