import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {List, Subheading, Colors} from 'react-native-paper';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SVGIcon} from './../../../components/SVGIcon';
import styles from './styles';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView enabled>
        <View
          style={styles.viewOne}>
          <View
            style={styles.viewTwo}>
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
            <Image
              style={styles.imageOne}
              source={{uri: 'https://picsum.photos/700'}}
            />
          </View>
        </View>
        <View style={styles.name}>
          <View>
            <Subheading style={styles.subHeading}>First Name</Subheading>
            <TextInput
              style={styles.textInputContainer}
              placeholder="Devansh"
            />
          </View>

          <View style={styles.name}>
            <Subheading style={styles.subHeading}>Last Name</Subheading>
            <TextInput
              style={styles.textInputContainer}
              placeholder="Agarwal"
            />
          </View>
          <View>
            <Subheading style={styles.subHeading}>Username</Subheading>
            <TextInput
              style={styles.textInputContainer}
              placeholder="daviz00"
            />
          </View>
        </View>
        <Text style={styles.bioText}>
          👉 To draw attention attention attention{'\n'}✈️ Commonly used by
          travel brands attention{'\n'}🎥 To call attention to you YouTube
          channel attention{'\n'}🥳 To indicate an achievement or award
          attention
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
