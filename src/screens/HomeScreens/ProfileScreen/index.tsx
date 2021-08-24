import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {getProfile} from '../../../store/Actions/UserActions';
import Spinner from '../../../components/Spinner';

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
        <SafeAreaView style={styles.container}>
          <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <View style={{alignSelf: 'center'}}>
              <FastImage
                style={styles.image}
                source={{
                  uri: user.avatar,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>

            <View style={styles.headContainer}>
              <Text style={inlineStyle.text}>
                {user.firstName} {user.lastName}
              </Text>
              <Text style={inlineStyle.tag}>@{user.username}</Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                <Text style={inlineStyle.text}>{user.followers.length}</Text>
                <Text style={inlineStyle.label}>Followers</Text>
              </View>
              <View style={styles.statsBox}>
                <Text style={inlineStyle.text}>{user.following.length}</Text>
                <Text style={inlineStyle.label}>Following</Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.bioText}>{user.bio}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode={'outlined'}
                color={'#00AAFF'}
                contentStyle={styles.editButtonContentStyles}
                style={styles.editButtonStyles}
                labelStyle={styles.editButtonLabelStyles}
                onPress={navigateToEditScreen}>
                Edit Profile
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <Spinner />
      )}
    </>
  );
}
