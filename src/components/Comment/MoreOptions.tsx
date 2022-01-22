import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Modal, Portal, List} from 'react-native-paper';
import {
  CameraIcon,
  ImageIcon,
} from '../../screens/AuthScreens/PersonalInfoScreen/icons';
import ImagePicker from 'react-native-image-crop-picker';
import axios from '../../constants/api';

const MoreOptions = ({id, name, commenter, visible, setVisible, deleteFunc}) => {

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <SafeAreaView style={styles.options}>
                name == commenter ? 
                (<List.Item
                    title="Delete"
                    left={props => <List.Icon {...props} icon="delete-outline"
                    onPress={() => {}}
                    titleStyle={styles.titleStyle} />}
                /> 
                <List.Item
                    title="Report"
                    left={props => <List.Icon {...props} icon="alert" />}
                />):
                ( <List.Item
                    title="Report"
                    left={props => <List.Icon {...props} icon="alert" />}
                />)
          </SafeAreaView>
        </Modal>
      </Portal>
    </>
  );
};

export default MoreOptions;

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },

  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
      color: "red"
  }
});
