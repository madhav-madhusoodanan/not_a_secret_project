import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {styles} from './styles';

export default function ProfileScreen() {
  const {navigate, goBack} = useNavigation();
  // const submitHandler = () => {
  //   console.log('Follow Button Pressed')
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1276570366555684865/7J55FrYi_400x400.jpg',
            }}
            style={styles.image}
            resizeMode="center"
          />
        </View>
      </View>

      <View style={styles.headContainer}>
        <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
          Miron Catalin
        </Text>
        <Text style={[styles.text, {color: '#333', fontSize: 14}]}>
          @mironcatalin
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 16}]}>3916</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 16}]}>394</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
        </View>
      </View>
      <Button onPress={() => console.log('Edit Profile Button Pressed')}>
        Edit
      </Button>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              {
                color: 'purple',
                fontSize: 14,
                textAlign: 'left',
                lineHeight: 22,
              },
            ]}>
            👉 To draw attention attention attention{'\n'} ✈️ Commonly used by
            travel brands attention {'\n'}🎥 To call attention to you YouTube
            channel attention{'\n'} 🎉 To indicate an achievement or award
            attention
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
