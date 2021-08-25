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
  const isFocused = useIsFocused();
  const route = useRoute();
  const auth = useSelector((state: any) => state.Auth);
  const profile = useSelector((state: any) => state.User);
  const dispatch = useDispatch();
  const {user} = auth;
  const navigateToEditScreen = () => {
    // @ts-ignore
    navigate('Profile', {
      screen: 'EditProfileScreen',
    });
  };
  const loadProfile = async () => {
    if (route.params) {
      // @ts-ignore
      await dispatch(getProfile(navigate, route.params.id));
    } else if (!profile.profile) {
      await dispatch(getProfile(navigate, auth.user._id));
    }
  };
  const inlineStyle = StyleSheet.create({
    text: {...styles.text, fontSize: 20},
    tag: {...styles.text, color: '#333', fontSize: 14},
    label: {...styles.text, ...styles.subText},
  });
  useEffect(() => {
    if (isFocused) {
      loadProfile();
      console.log(user._id);
    }
  }, [isFocused]);

  return (
    <>
      {!profile.loading && profile.profile ? (
        <ProfileTop
          inlineStyle={inlineStyle}
          navigateToEditScreen={navigateToEditScreen}
          styles={styles}
          user={profile.profile}
          id={user._id}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
}
