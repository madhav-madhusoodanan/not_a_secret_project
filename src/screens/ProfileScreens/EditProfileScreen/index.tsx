import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {List, Subheading, Colors, Button} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {updateuser} from '../../../store/Actions/AuthActions';
import ProfileButton from '../../../components/Buttons/ProfileButton';
import ProfileInput from '../../../components/TextInput/ProfileInput';
import {useIsFocused} from '@react-navigation/core';

const bioContent =
  '👉 To draw attention attention attention ✈️ Commonly used by travel brands attention 🎥 To call attention to you YouTube channel attention 🥳 To indicate an achievement or award attention';

export default function EditProfileScreen() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.Auth);
  const {user, loading} = auth;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    bio: '',
    avatar: '',
  });

  const updateHandler = () => {
    // console.log({values});
    dispatch(updateuser(values, user._id));
  };
  const SaveButton = () => (
    <Button
      color={'#00AAFF'}
      loading={loading}
      disabled={loading}
      uppercase={false}
      onPress={() => updateHandler()}
      labelStyle={styles.saveButton}>
      Save
    </Button>
  );

  const setUser = () => {
    setValues({
      ...values,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      bio: user.bio,
      avatar: user.avatar,
    });
  };

  useEffect(() => {
    if (isFocused) {
      setUser();
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {user ? (
        <KeyboardAvoidingView enabled>
          <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode={'never'}
            style={styles.scrollStyle}>
            <View style={styles.viewOne}>
              <View style={styles.viewTwo}>
                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.5}
                  style={styles.touchableOpacityOne}>
                  <List.Icon
                    color={Colors.black}
                    icon="pencil"
                    style={styles.listIconOne}
                  />
                </TouchableOpacity>
                <FastImage
                  style={styles.imageOne}
                  source={{
                    uri: values.avatar,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </View>
            <ProfileInput
              label="First Name"
              value={values.firstName}
              onChange={val => setValues({...values, firstName: val})}
            />
            <ProfileInput
              label="Last Name"
              value={values.lastName}
              onChange={val => setValues({...values, lastName: val})}
            />
            <ProfileInput
              label="Username"
              onChange={val => setValues({...values, username: val})}
              value={values.username}
            />
            <View style={styles.content}>
              <Subheading style={styles.subHeading}>Bio</Subheading>
              <TextInput
                style={styles.editor}
                selectionColor={'#c8e7ff'}
                placeholderTextColor={'#adb5bd'}
                maxLength={300}
                multiline
                textBreakStrategy={'highQuality'}
                autoCompleteType={'off'}
                caretHidden={false}
                autoCapitalize="sentences"
                keyboardType="default"
                underlineColorAndroid="#BDBDBD"
                returnKeyType="next"
                value={values.bio}
                onChangeText={val => setValues({...values, bio: val})}
              />
            </View>
            <ProfileButton
              text="Save"
              submitHandler={updateHandler}
              loading={loading}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <Text> LOADING </Text>
      )}
    </SafeAreaView>
  );
}
