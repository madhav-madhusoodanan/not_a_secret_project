import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import MenuIcon from '@iconscout/react-native-unicons/icons/uil-ellipsis-h';
import {useNavigation} from '@react-navigation/native';
import {Button, Subheading} from 'react-native-paper';
import {styles} from './styles';

export default function ProfileScreen() {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('Profile', {
      screen: 'EditProfileScreen',
    });
  };

  const inlineStyle = StyleSheet.create({
    text: {...styles.text, fontSize: 20},
    tag: {...styles.text, color: '#333', fontSize: 14},
    label: {...styles.text, ...styles.subText},
  });

  const bioContent = " JEE Mentor \n Co-Founder @ Verse \n BITS Pilani '22";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <FastImage
            style={styles.image}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View style={styles.headContainer}>
          <Text style={inlineStyle.text}>Devansh Agarwal</Text>
          <Text style={inlineStyle.tag}>@daviz00</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={inlineStyle.text}>3916</Text>
            <Text style={inlineStyle.label}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={inlineStyle.text}>394</Text>
            <Text style={inlineStyle.label}>Following</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.bioText}>{bioContent}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={'outlined'}
            color={'#00AAFF'}
            contentStyle={styles.editButtonContentStyles}
            style={styles.editButtonStyles}
            labelStyle={styles.editButtonLabelStyles}
            onPress={submitHandler}>
            Edit Profile
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
