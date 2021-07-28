import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import NavButton from '../../../components/button/onboard';

export default function Phone() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('OneTimePassword');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'height'}
        style={styles.containerAvoidingView}>
        <Subheading style={styles.title}>
          Let's start with your{'\n'}phone #
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
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 35,
    position: 'relative',
    letterSpacing: 0.5,
    color: 'black',
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingBottom: 0,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    width: 235,
    marginTop: 85,
  },

  inputStyle: {
    marginLeft: 5,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
