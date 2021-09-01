import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {
  Modal,
  Portal,
  Button,
  Headline,
  Chip,
  List,
  Snackbar,
  Appbar,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export default function CreatePostBottomSheetContent({}) {
  // modal initiation
  const {user} = useSelector((state: any) => state.Auth);
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // snackbar
  const [visibleSnackBar, setVisibleSnackBar] = React.useState(false);
  const onToggleSnackBar = () => setVisibleSnackBar(!visible);
  const onDismissSnackBar = () => setVisibleSnackBar(false);

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}>
          <Text>Select Community Modal</Text>
        </Modal>
      </Portal>
      <Headline style={styles.headline}> Create Post </Headline>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.customListView}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar,
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <Text style={{fontSize: 16, fontFamily: 'Inter-SemiBold'}}>
                {user.firstName} {user.lastName}
              </Text>
            </View>
            <View style={styles.extraInfoWrapper}>
              <Chip icon="chevron-down" onPress={showModal}>
                Nishant's Space
              </Chip>
            </View>
          </View>
        </View>

        <TextInput
          value={message}
          onChangeText={msg => setMessage(msg)}
          placeholderTextColor={'#adb5bd'}
          placeholder="What do you want to talk about?"
          multiline
          selectionColor={'#c8e7ff'}
          // onFocus
          maxLength={900}
          textBreakStrategy={'highQuality'}
          autoCompleteType={'off'}
          style={styles.editor}
        />
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => console.log('Image Removed')}
            activeOpacity={0.5}
            style={styles.touchableOpacity}>
            <List.Icon color={'black'} icon="close" style={styles.listIcon} />
          </TouchableOpacity>
          <FastImage
            style={styles.postImage}
            source={{
              uri: 'https://i.ibb.co/wpwTg4z/book.png',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </ScrollView>

      <Appbar style={styles.bottomBar}>
        <Appbar.Action
          icon="camera"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action
          icon="image"
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon="poll"
          disabled
          onPress={onToggleSnackBar}
          // onPress={() => console.log('Pressed label')}
        />
        <Button
          mode={'contained'}
          color={'#00AAFF'}
          contentStyle={styles.postButtonContentStyles}
          style={styles.postButtonStyles}
          labelStyle={styles.postButtonLabelStyles}
          onPress={() => {
            console.log(message);
          }}>
          Post
        </Button>
      </Appbar>
      <Snackbar
        visible={visibleSnackBar}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
}
