import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {BottomSheetModal, TouchableOpacity} from '@gorhom/bottom-sheet';
import {View, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors, List, Subheading} from 'react-native-paper';

const EditProfileImage = ({
  setImage,
  bottomSheetModalRef = useRef<BottomSheetModal>(null),
}) => {
  const snapPoints = useMemo(() => [0, 150], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetchanges ', index);
  }, []);
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const galleryHandler = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => setImage(image.path));
  };

  const cameraHandler = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => setImage(image.path));
  };
  return (
    <View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        stackBehavior={'push'}
        onChange={handleSheetChanges}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={galleryHandler} style={styles.touchable}>
            <List.Icon color={Colors.black} icon="earth-box" />
            <Subheading style={styles.text}>Gallery</Subheading>
          </TouchableOpacity>
          <TouchableOpacity onPress={cameraHandler} style={styles.touchable}>
            <List.Icon color={Colors.black} icon="camera" />
            <Subheading style={styles.text}>Camera</Subheading>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default EditProfileImage;

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    marginVertical: 10,
  },
});
