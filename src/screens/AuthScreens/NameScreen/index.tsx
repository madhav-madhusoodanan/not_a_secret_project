import React, {useState, useRef, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, Headline} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import NavButton from '../../../components/Buttons/NavigationButton';
import styles from './styles';

export default function NameScreen() {
  const {navigate, goBack} = useNavigation();

  let textInput = useRef(null);
  const [focusInput, setFocusInput] = useState(true);
  const route = useRoute();
  let initialState = {
    firstName: '',
    lastName: '',
    // @ts-ignore
    phoneNum: route.params.phoneNum,
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const {firstName, lastName} = values;

  const throwAlert = name => {
    Alert.alert('Invalid name!', `Please enter ${name}name`, [
      {text: 'Okay', style: 'cancel', onPress: () => setValues(initialState)},
      // check = true;
    ]);
  };
  const submitHandler = () => {
    if (!firstName) {
      throwAlert('First ');
      return;
    }
    if (!lastName) {
      throwAlert('Last ');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // @ts-ignore
      navigate('PersonalInfoScreen', {values});
    }, 700);
  };

  useEffect(() => {
    // @ts-ignore
    textInput.focus();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Enter your Full Name
      </Headline>

      <View style={styles.input}>
        <TextInput
          // @ts-ignore
          ref={input => (textInput = input)}
          value={firstName}
          style={styles.inputStyle}
          selectionColor={'#c8e7ff'}
          placeholderTextColor={'#adb5bd'}
          maxLength={15}
          caretHidden={true}
          placeholder="First Name"
          autoCapitalize="sentences"
          keyboardType="default"
          selectTextOnFocus={true}
          underlineColorAndroid="black"
          onFocus={e => setFocusInput(true)}
          onBlur={e => setFocusInput(false)}
          returnKeyType="next"
          onChangeText={e => setValues({...values, firstName: e})}
        />
        <TextInput
          value={lastName}
          style={styles.inputStyle}
          selectionColor={'#c8e7ff'}
          placeholderTextColor={'#adb5bd'}
          maxLength={15}
          caretHidden={true}
          placeholder="Last Name"
          autoCapitalize="sentences"
          keyboardType="default"
          selectTextOnFocus={true}
          underlineColorAndroid="black"
          returnKeyType="go"
          onChangeText={e => setValues({...values, lastName: e})}
        />
      </View>
      <NavButton onPress={submitHandler} sending={loading} text="Save" />
    </SafeAreaView>
  );
}
