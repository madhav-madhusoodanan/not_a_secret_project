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
          style={{
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginVertical: 30,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.5}
              style={{
                position: 'absolute',
                zIndex: 1,
                bottom: -15,
                right: -15,
              }}>
              <List.Icon
                color={Colors.black}
                icon="pencil"
                style={{
                  borderRadius: 15,
                  height: 30,
                  width: 30,
                  backgroundColor: '#bbb',
                }}
              />
            </TouchableOpacity>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginHorizontal: 'auto',
              }}
              source={{uri: 'https://picsum.photos/700'}}
            />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <View>
            <Subheading style={{color: 'black'}}>First Name</Subheading>
            <TextInput
              style={styles.textInputContainer}
              placeholder="Devansh"
            />
          </View>

          <View style={{marginVertical: 10}}>
            <Subheading style={{color: 'black'}}>Last Name</Subheading>
            <TextInput
              style={styles.textInputContainer}
              placeholder="Agarwal"
            />
          </View>
          <View>
            <Subheading style={{color: 'black'}}>Username</Subheading>
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
