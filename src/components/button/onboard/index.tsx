import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './styles';
const NavButton = ({onPress, text}) => {
  return (
    <View style={styles.btnView}>
      <Button
        mode="contained"
        labelStyle={styles.labelStyle}
        color="#00AAFF"
        onPress={onPress}
        icon="phone"
        style={styles.btn}>
        {text}
      </Button>
    </View>
  );
};

export default NavButton;
