import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {Headline} from 'react-native-paper';

import styles from './styles';
import GenderSwitch from './../../../components/GenderSwitch';
import NavButton from '../../../components/Buttons/NavigationButton';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PersonalInfoScreen() {
  const [isActive, setIsActive] = React.useState(false);
  const [Value, setValue] = React.useState(false);
  const {navigate, goBack} = useNavigation();

  const submitHandler = () => {
    navigate('ProfilePhotoScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Select Gender
      </Headline>
      <Headline
        numberOfLines={2}
        style={[
          styles.genderText,
          {color: isActive ? 'deeppink' : 'dodgerblue'},
        ]}>
        Female
      </Headline>
      <View style={styles.switch}>
        <GenderSwitch
          isActive={isActive}
          onPress={() => {
            setIsActive(isActive => !isActive);
          }}
        />
      </View>

      <NavButton onPress={submitHandler} text="Confirm" />
    </SafeAreaView>
  );
}
