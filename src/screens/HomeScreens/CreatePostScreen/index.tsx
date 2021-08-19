import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  Modal,
  Portal,
  Button,
  Headline,
  Chip,
  Snackbar,
  Appbar,
} from 'react-native-paper';
import {styles} from './styles';

export default function CreatePostBottomSheetContent({}) {
  // modal initiation

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

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
      <View style={styles.contentContainer}>
        {/* <Text>Awesome 🎉</Text> */}
        <View style={styles.customListView}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <Text style={{fontSize: 16, fontFamily: 'Inter-SemiBold'}}>
                Devansh Agarwal
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
      </View>

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
          onPress={() => console.log('Edit Profile Button Pressed')}>
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
