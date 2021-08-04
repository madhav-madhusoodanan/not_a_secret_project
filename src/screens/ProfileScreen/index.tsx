import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import MenuIcon from '@iconscout/react-native-unicons/icons/uil-ellipsis-h';
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
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1276570366555684865/7J55FrYi_400x400.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.headContainer}>
        <Text style={[styles.text, {fontSize: 20}]}>Miron Catalin</Text>
        <Text style={[styles.text, {color: '#333', fontSize: 14}]}>
          @mironcatalin
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 20}]}>3916</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 20}]}>394</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
        </View>
      </View>

      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text style={styles.bioText}>
            👉 To draw attention attention attention{'\n'}✈️ Commonly used by
            travel brands attention{'\n'}🎥 To call attention to you YouTube
            channel attention{'\n'}🥳 To indicate an achievement or award
            attention
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={'outlined'}
            color={'#00AAFF'}
            contentStyle={styles.editButtonContentStyles}
            style={styles.editButtonStyles}
            labelStyle={styles.editButtonLabelStyles}
            onPress={() => console.log('Edit Profile Button Pressed')}>
            Edit Profile
          </Button>
          <Button
            mode={'outlined'}
            icon={() => <MenuIcon size="24" color="#BDBDBD" />}
            color={'#BDBDBD'}
            contentStyle={styles.menuButtonContentStyles}
            style={styles.menuButtonStyles}
            labelStyle={styles.menuButtonLabelStyles}
            onPress={() => console.log('Menu Button Pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
