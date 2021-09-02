import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';
import {useIsFocused} from '@react-navigation/core';
import EditProfileForm from '../../../components/Profile/EditProfileForm';
import Spinner from '../../../components/Spinner';

export default function EditProfileScreen() {
  const isFocused = useIsFocused();
  const auth = useSelector((state: any) => state.Auth);
  const {user} = auth;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    bio: '',
    avatar: '',
  });

  const setUser = () => {
    setValues({
      ...values,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      bio: user.bio,
      avatar: user.avatar.uri,
    });
  };

  useEffect(() => {
    if (isFocused) {
      setUser();
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {!user ? (
        <Spinner />
      ) : (
        <EditProfileForm
          setValues={setValues}
          styles={styles}
          values={values}
        />
      )}
    </SafeAreaView>
  );
}
