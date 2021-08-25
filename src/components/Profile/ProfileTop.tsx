import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-paper';
import ProfileButton from '../Buttons/ProfileButton';

const ProfileTop = ({styles, user, inlineStyle, navigateToEditScreen, id}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false}>
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
        {id === user._id ? (
          <ProfileButton
            text="Edit Profile"
            submitHandler={navigateToEditScreen}
          />
        ) : user.following.includes(id) ? (
          <ProfileButton text="Unfollow" submitHandler={navigateToEditScreen} />
        ) : (
          <ProfileButton text="Follow" submitHandler={navigateToEditScreen} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({});
