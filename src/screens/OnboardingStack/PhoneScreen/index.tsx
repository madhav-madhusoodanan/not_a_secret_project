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
      <Subheading style={styles.title}>
        Let's start with your{'\n'}phone number
      </Subheading>
      <View style={[styles.input, {}]}>
        <View>
          <Text style={{fontSize: 20, color: 'grey'}}>{'+91 |'}</Text>
        </View>
        <TextInput
          // ref={input => (textInput = input)}
          style={styles.inputStyle}
          placeholder="909 909 9090"
          placeholderTextColor="grey"
          keyboardType="numeric"
          // value={phoneNum}
          maxLength={10}
          // onChangeText={num => setPhoneNum(num)}
          secureTextEntry={false}
          // onFocus={e => setFocusInput(true)}
          // onBlur={e => setFocusInput(false)}
          // autoComplete="tel"
        />
      </View>
      <NavButton onPress={submitHandler} text="Continue with Phone" />
    </SafeAreaView>
  );
}
