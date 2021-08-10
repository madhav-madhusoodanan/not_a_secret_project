import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

import NavButton from '../../../components/Buttons/NavigationButton';

export default function PhoneScreen() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('OneTimePasswordScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Subheading numberOfLines={2} style={styles.title}>
        Let's start with your {'\n'}phone number
      </Subheading>
      <View style={[styles.input, {}]}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
              // flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter-Medium',
              // backgroundColor: 'red',
            }}>
            {'+91'}
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
    </SafeAreaView>
  );
}
