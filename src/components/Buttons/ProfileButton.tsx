import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../../constants/appTheme';

interface Props {
    submitHandler: any;
    text: any;
    loading?: any;
  }
  
const ProfileButton = ({ text, submitHandler, loading }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        mode={'outlined'}
        color={'#00AAFF'}
        loading={loading}
        disabled={loading}
        contentStyle={styles.editButtonContentStyles}
        style={styles.editButtonStyles}
        labelStyle={styles.editButtonLabelStyles}
        onPress={submitHandler}>
        {text}
      </Button>
    </View>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
    
  
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  editButtonStyles: {
    borderRadius: 10,
    marginRight: 4,
    borderColor: Theme.colors.primary,
    borderWidth: 2,
  },

  editButtonLabelStyles: {
    color: Theme.colors.primary,
    textTransform: 'none',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },

  editButtonContentStyles: {
    height: 42,
    width: '100%',
  },
});
