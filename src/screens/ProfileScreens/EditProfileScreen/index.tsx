import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {updateuser} from '../../../store/Actions/AuthActions';
import {useIsFocused} from '@react-navigation/core';
import EditProfileForm from '../../../components/Profile/EditProfileForm';
import Spinner from '../../../components/Spinner';

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
      {!user ? (
        <Spinner />
      ) : (
        <EditProfileForm
          loading={loading}
          setValues={setValues}
          styles={styles}
          updateHandler={updateHandler}
          values={values}
        />
      )}
    </SafeAreaView>
  );
}
