import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getMe} from '../../store/Actions/AuthActions';
const SplashImg = require('../../assets/images/splash.png');

export default function SplashScreen() {
  const {height, width} = Dimensions.get('screen');
  const User = useSelector((state: any) => state.Auth);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4147BB',
    },
    image: {
      width,
      height,
    },
  });

  const userCheck = async () => {
    const token = await AsyncStorage.getItem('verseAuthToken');
    if (token) {
      await dispatch(getMe(navigate, token));
      setTimeout(() => {
        // @ts-ignore
        navigate('Home');
      }, 300);
    } else {
      setTimeout(() => {
        // @ts-ignore
        navigate('Auth');
      }, 2000);
    }
  };
  useEffect(() => {
    userCheck();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={SplashImg} resizeMode="cover" />
    </View>
  );
}
