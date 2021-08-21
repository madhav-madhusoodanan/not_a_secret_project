import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Subheading, Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import NavButton from '../../../components/Buttons/NavigationButton';
import {useDispatch, useSelector} from 'react-redux';
import {getPhoneNums, sendOTP} from '../../../store/Actions/UserActions';
import {showToast} from '../../../constants/appLayout';

export default function PhoneScreen() {
  const {navigate} = useNavigation();
  const auth = useSelector((state: any) => state.User);
  const [phoneNum, setPhoneNum] = useState('');
  const dispatch = useDispatch();
  const submitHandler = async () => {
    console.log({reached: 'reached'});
    try {
      var test =
        /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
          phoneNum,
        );
      if (test) {
        // await dispatch(sendOTP(phoneNum));
        const condition = auth.nums.includes(`+91${phoneNum}`);
        // @ts-ignore
        navigate('OneTimePasswordScreen', {
          phoneNum: `+91${phoneNum}`,
          new: !condition,
        });
      } else {
        showToast('Please enter valid mobile number');
        return;
      }
    } catch (error) {
      console.log({e: error})
    }
  };

  const getPhones = async () => {
    try {
      await dispatch(getPhoneNums());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Let's start with your {'\n'}phone number
      </Headline>
      <View style={[styles.input]}>
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
          onChangeText={phone => setPhoneNum(phone)}
        />
      </View>
      <NavButton
        onPress={submitHandler}
        sending={auth.loading}
        text="Continue"
      />
      <Text style={styles.subTitle}>
        by clicking continue you are agreeing to the terms of use {'\n'}
        and acknowledging the privacy policy close duh
      </Text>
    </SafeAreaView>
  );
}
