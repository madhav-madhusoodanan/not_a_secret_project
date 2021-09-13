import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ProfileButton from '../Buttons/ProfileButton';
import {useDispatch, useSelector} from 'react-redux';
import {followUser, unfollowUser} from '../../store/Actions/UserActions';

const ProfileTop = ({styles, profile, inlineStyle}) => {
  const { user } = useSelector((state: any) => state.Auth);
  console.log(profile.username)
  const dispatch = useDispatch();
  const followFunction = async () => {
    await dispatch(followUser(profile._id));
  };
  const unFollowFunction = async () => {
    await dispatch(unfollowUser(profile._id));
  };
  const navigateToEditScreen = () => {
        // @ts-ignore
        navigate('Profile', {
          screen: 'EditProfileScreen',
        });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <FastImage
            style={styles.image}
            source={{
              uri: profile.avatar.uri,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={styles.headContainer}>
          <Text style={inlineStyle.text}>
            {profile.firstName} {profile.lastName}
          </Text>
          <Text style={inlineStyle.tag}>@{profile.username}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={inlineStyle.text}>
              {profile.followers && profile.followers.length}
            </Text>
            <Text style={inlineStyle.label}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={inlineStyle.text}>
              {profile.following && profile.following.length}
            </Text>
            <Text style={inlineStyle.label}>Following</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={profile.bio && styles.bioText}>{profile.bio}</Text>
        </View>
         {user._id === profile._id ? (
          <ProfileButton
            text="Edit Profile"
            submitHandler={navigateToEditScreen}
          />
        ) : profile.followers.includes(user._id) ? (
          <ProfileButton
            text="Unfollow"
            submitHandler={unFollowFunction}
            loading={profile.followLoading}
          />
        ) : (
          <ProfileButton
            text="Follow"
            submitHandler={followFunction}
            loading={profile.followLoading}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTop;
