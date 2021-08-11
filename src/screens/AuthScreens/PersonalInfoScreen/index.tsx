import React, {useState, useRef, useEffect} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Headline} from 'react-native-paper';
import {View as MView, Image as MImage, AnimatePresence} from 'moti';
import {Easing} from 'react-native-reanimated';
import faker from 'faker';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';

import NavButton from '../../../components/Buttons/NavigationButton';
const {width, height} = Dimensions.get('screen');
const images = [
  `https://images.pexels.com/photos/1912832/pexels-photo-1912832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  `https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/2887710/pexels-photo-2887710.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
];

const userGender = [
  `https://i.ibb.co/VMyMmwx/gender-male.png`,
  `https://i.ibb.co/R4JbcMJ/gender-female.png`,
  `https://i.ibb.co/nnwYSrB/gender-third.png`,
];

const getCard = () => ({
  bg: faker.helpers.randomize(images),
  userGender: faker.helpers.randomize(userGender),
  type: faker.helpers.randomize(['male', 'female', 'third gender']),
  cc: faker.finance.mask(4),
});

const _width = width * 0.9;
const _height = _width * 0.6;
export default function ColorfulCard() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    // @ts-ignore
    navigate('Home');
  };

  const card = getCard();
  const [bg, setBg] = React.useState(images[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Choose your Gender {'\n'}and Profile Photo
      </Headline>
      <View style={styles.card}>
        <AnimatePresence>
          <MView
            from={{opacity: 0, scale: 1}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 2}}
            transition={{duration: 1000, type: 'timing'}}
            key={bg}>
            <MImage
              source={{uri: bg}}
              from={{
                rotate: '0deg',
                scale: 1.8,
              }}
              animate={{
                rotate: '360deg',
                scale: 3,
              }}
              transition={{
                loop: true,
                type: 'timing',
                duration: 8000,
                easing: Easing.linear,
              }}
              blurRadius={60}
              style={{
                width: _width * 1.5,
                height: _height * 1.5,
                resizeMode: 'cover',
                position: 'absolute',
                alignSelf: 'center',
              }}
            />
          </MView>
        </AnimatePresence>
        <View style={{flexDirection: 'row', flex: 1, marginVertical: 0}}>
          <View style={{flex: 1, padding: 10}}>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'pink',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 32,
                  fontFamily: 'Inter-SemiBold',
                }}>
                {/* {card.amount} */}
                Devansh
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Inter-SemiBold',
                }}>
                Agarwal
              </Text>
            </View>
            <Text
              style={{
                color: 'white',
                // backgroundColor: 'green',
                textTransform: 'uppercase',
                fontFamily: 'Gilroy-Bold',
                opacity: 0.6,
                marginTop: 20,
              }}>
              {card.type}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              // backgroundColor: 'yellow',
              padding: 10,
            }}>
              {/* @ts-ignore */}
            <TouchableOpacity onPress={() => this.pickSingle(true, true)}>
              <MImage
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg',
                }}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'cover',
                  borderRadius: 80,
                  borderWidth: 1,
                  borderColor: 'transparent',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 170}}>
        {images.map(uri => {
          // or userGender.map {for individual gender images but issue with linked background image}
          return (
            <TouchableOpacity
              key={uri}
              onPress={() => {
                setBg(uri);
              }}>
              <MImage
                source={{uri: 'https://i.ibb.co/VMyMmwx/gender-male.png'}}
                from={{borderColor: 'rgba(0,0,0,0)'}}
                animate={{
                  borderColor: uri === bg ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)',
                }}
                style={{
                  marginRight: 10,
                  width: 50,
                  height: 50,
                  resizeMode: 'cover',
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: 'transparent',
                }}
                /* @ts-ignore */
                transition={{duration: 400}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <NavButton onPress={submitHandler} text="Continue" />
    </SafeAreaView>
  );
}