import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ProfileButton from '../Buttons/ProfileButton';
import {useDispatch, useSelector} from 'react-redux';
import {followUser, unfollowUser} from '../../store/Actions/UserActions';

const ProfileTop = ({styles, user, inlineStyle, navigateToEditScreen, id}) => {
  const profile = useSelector((state: any) => state.User);
  const dispatch = useDispatch();
  const followFunction = async () => {
    await dispatch(followUser(user._id));
  };
  const unFollowFunction = async () => {
    await dispatch(unfollowUser(user._id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <FastImage
            style={styles.image}
            source={{
              uri: user.avatar.uri,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
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
            <Text style={inlineStyle.text}>
              {user.followers && user.followers.length}
            </Text>
            <Text style={inlineStyle.label}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={inlineStyle.text}>
              {user.following && user.following.length}
            </Text>
            <Text style={inlineStyle.label}>Following</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={user.bio && styles.bioText}>{user.bio}</Text>
        </View>
        {id === user._id ? (
          <ProfileButton
            text="Edit Profile"
            submitHandler={navigateToEditScreen}
          />
        ) : user.following.includes(id) ? (
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

const styles = StyleSheet.create({});
