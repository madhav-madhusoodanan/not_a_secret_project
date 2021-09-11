import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {getProfile} from '../../../store/Actions/UserActions';
import Spinner from '../../../components/Spinner';
import ProfileTop from '../../../components/Profile/ProfileTop';

export default function ProfileScreen() {
  const {navigate, goBack} = useNavigation();
  const auth = useSelector((state: any) => state.Auth);
  const dispatch = useDispatch();
  const {user} = auth;
  const navigateToEditScreen = () => {
    // @ts-ignore
    navigate('Profile', {
      screen: 'EditProfileScreen',
    });
  };
  const loadProfile = async () => {
    await dispatch(getProfile(auth.user._id));
  };
  const inlineStyle = StyleSheet.create({
    text: {...styles.text, fontSize: 20},
    tag: {...styles.text, color: '#333', fontSize: 14},
    label: {...styles.text, ...styles.subText},
  });
  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      {!auth.loading && auth.user ? (
        <ProfileTop
          inlineStyle={inlineStyle}
          navigateToEditScreen={navigateToEditScreen}
          styles={styles}
          user={auth.user}
          id={user._id}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
}
