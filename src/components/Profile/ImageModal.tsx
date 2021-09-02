import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {
  CameraIcon,
  ImageIcon,
} from '../../screens/AuthScreens/PersonalInfoScreen/icons';
import ImagePicker from 'react-native-image-crop-picker';
import axios from '../../constants/api';

const EditProfileImage = ({visible, setVisible, setUri, setLoading}) => {
  const thenFunction = async image => {
    setLoading(true);
    setUri(image.path);
    let arr = image.path.split('/');
    const obj = {
      uri: image.path,
      name: image.path.split('/')[arr.length - 1],
      type: image.mime,
    };
    const data = new FormData();
    data.append('file', obj);

    const axiosres = await axios.post('/api/v1/users/getUrl', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    setUri(axiosres.data.data.uri);
  };
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => thenFunction(image))
      .catch(err => console.log({err}))
      .finally(() => {
        setVisible(false);
        setLoading(false);
      });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
      compressImageMaxHeight: 300,
      compressImageMaxWidth: 300,
    })
      .then(image => thenFunction(image))
      .catch(err => console.log({err}))
      .finally(() => {
        setVisible(false);
        setLoading(false);
      });
  };

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <SafeAreaView style={styles.options}>
            <Pressable style={styles.option} onPress={chooseImage}>
              <ImageIcon />
              <Text>Library </Text>
            </Pressable>
            <Pressable style={styles.option} onPress={openCamera}>
              <CameraIcon />
              <Text>Camera</Text>
            </Pressable>
          </SafeAreaView>
        </Modal>
      </Portal>
    </>
  );
};

export default EditProfileImage;

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
});
