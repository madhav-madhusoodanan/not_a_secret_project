import React, {useState, useRef, useEffect} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Headline} from 'react-native-paper';
import {View as MView, Image as MImage, AnimatePresence} from 'moti';
import {Easing} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import NavButton from '../../../components/Buttons/NavigationButton';
import { loginuser } from '../../../store/Actions/UserActions';
const {width, height} = Dimensions.get('screen');

const _width = width * 0.9;
const _height = _width * 0.6;
const data = [
  {
    gender: 'male',
    background: `https://images.pexels.com/photos/1912832/pexels-photo-1912832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    avatar: `https://i.ibb.co/VMyMmwx/gender-male.png`,
  },
  {
    gender: 'female',
    background: `https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    avatar: `https://i.ibb.co/R4JbcMJ/gender-female.png`,
  },
  {
    gender: 'other',
    background: `https://images.pexels.com/photos/2887710/pexels-photo-2887710.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
    avatar: `https://i.ibb.co/nnwYSrB/gender-third.png`,
  },
];
export default function ColorfulCard() {
  const route = useRoute();
  const dispatch = useDispatch()

  // @ts-ignore
  const [values, setValues] = useState(route.params.values);
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    dispatch(loginuser({ ...values, gender, isNew: true },navigate))
    // @ts-ignore
    navigate('Home');
  };

  const [bg, setBg] = React.useState(data[0].background);
  const [gender, setGender] = useState(data[0].gender);
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
                {values.firstName}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Inter-SemiBold',
                }}>
                {values.lastName}
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
              {gender}
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
            <TouchableOpacity onPress={() => console.log('ohho')}>
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
        {data.map((each, i) => {
          // or userGender.map {for individual gender images but issue with linked background image}
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setGender(each.gender);
                setBg(each.background);
              }}>
              <MImage
                source={{uri: each.avatar}}
                from={{borderColor: 'rgba(0,0,0,0)'}}
                animate={{
                  borderColor:
                    each.background === bg ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)',
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
