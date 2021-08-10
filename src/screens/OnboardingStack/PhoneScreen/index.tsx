import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Subheading, Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

import NavButton from '../../../components/Buttons/NavigationButton';

export default function PhoneScreen() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('OneTimePasswordScreen');
  };

  const source = {
    uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Let's start with your {'\n'}phone number
      </Headline>
      <View style={[styles.input, {}]}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter-Medium',
            }}>
            {'+91 -'}
          </Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="xxxxxxxxxx"
          placeholderTextColor="#DADADA"
          keyboardType="numeric"
          maxLength={10}
          secureTextEntry={false}
        />
      </View>

      <NavButton onPress={submitHandler} text="Continue" />
      <Text style={styles.subTitle}>
        by clicking continue you are agreeing to the terms of use {'\n'}
        and acknowledging the privacy policy close
      </Text>
    </SafeAreaView>
  );
}
