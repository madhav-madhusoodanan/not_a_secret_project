import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {List, Subheading, Colors} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SVGIcon} from './../../../components/SVGIcon';
import styles from './styles';

const bioContent =
  '👉 To draw attention attention attention ✈️ Commonly used by travel brands attention 🎥 To call attention to you YouTube channel attention 🥳 To indicate an achievement or award attention';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView enabled>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          style={styles.scrollStyle}>
          <View style={styles.viewOne}>
            <View style={styles.viewTwo}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.5}
                style={styles.touchableOpacityOne}>
                <List.Icon
                  color={Colors.black}
                  icon="pencil"
                  style={styles.listIconOne}
                />
              </TouchableOpacity>
              <FastImage
                style={styles.imageOne}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View>
              <Subheading style={styles.subHeading}>First Name</Subheading>
              <TextInput
                style={styles.textInputContainer}
                selectionColor={'#c8e7ff'}
                placeholderTextColor={'#adb5bd'}
                maxLength={15}
                caretHidden={false}
                autoCapitalize="sentences"
                keyboardType="default"
                selectTextOnFocus={true}
                underlineColorAndroid="#BDBDBD"
                returnKeyType="next"
                placeholder="Devansh"
              />
            </View>

            <View style={styles.content}>
              <Subheading style={styles.subHeading}>Last Name</Subheading>
              <TextInput
                style={styles.textInputContainer}
                selectionColor={'#c8e7ff'}
                placeholderTextColor={'#adb5bd'}
                maxLength={15}
                caretHidden={false}
                autoCapitalize="sentences"
                keyboardType="default"
                selectTextOnFocus={true}
                underlineColorAndroid="#BDBDBD"
                returnKeyType="next"
                placeholder="Agarwal"
              />
            </View>
            <View style={styles.content}>
              <Subheading style={styles.subHeading}>Username</Subheading>
              <TextInput
                style={styles.textInputContainer}
                selectionColor={'#c8e7ff'}
                placeholderTextColor={'#adb5bd'}
                maxLength={10}
                caretHidden={false}
                autoCapitalize="sentences"
                keyboardType="default"
                selectTextOnFocus={true}
                underlineColorAndroid="#BDBDBD"
                returnKeyType="next"
                placeholder="daviz00"
              />
            </View>
            <View style={styles.content}>
              <Subheading style={styles.subHeading}>Bio</Subheading>
              <TextInput
                style={styles.editor}
                selectionColor={'#c8e7ff'}
                placeholderTextColor={'#adb5bd'}
                maxLength={300}
                multiline
                textBreakStrategy={'highQuality'}
                autoCompleteType={'off'}
                caretHidden={false}
                autoCapitalize="sentences"
                keyboardType="default"
                selectTextOnFocus={true}
                underlineColorAndroid="#BDBDBD"
                returnKeyType="next"
                placeholder={bioContent}
              />
            </View>
          </View>
          <Text style={styles.bioText}></Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
