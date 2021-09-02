import React, {useState} from 'react';
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
  ActivityIndicator
} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import ImageModal from '../../../components/Profile/ImageModal'

export default function CreatePostBottomSheetContent({}) {
  const {user} = useSelector((state: any) => state.Auth);
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [imageData, setImageData] = useState(null)
  const [uri, setUri] = useState(null)

  // snackbar
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onToggleSnackBar = () => setVisibleSnackBar(!visible);
  const onDismissSnackBar = () => setVisibleSnackBar(false);

  const submitHandler = () => {
    const data = new FormData();
    // @ts-ignore
    const values = { description: message, community: `route.params.community` }
    if(imageData){
      data.append('file', imageData);
    }
    for(let item in values){
        data.append(item, values[item])
    }
    
    // dispatch(updateuser(data, user._id));
  }

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={styles.modalContainerStyle}>
          <Text style={styles.modalCommunityTitle}>Select Community</Text>
          <View style={styles.listGroup}>
            <RNBounceable bounceEffect={0.97} onPress={() => {}}>
              <List.Item
                title="JEE Mentorship by Nishant Jindal"
                titleStyle={styles.communityTitleStyle}
                style={styles.communityListItem}
              />
            </RNBounceable>
          </View>
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
              <Chip icon="chevron-down" onPress={() => setVisible(true)}>
                JEE Mentorship ..
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
        {uri ? !imageLoading ? <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => setUri(null)}
            activeOpacity={0.5}
            style={styles.touchableOpacity}>
            <List.Icon color={'black'} icon="close" style={styles.listIcon} />
          </TouchableOpacity>
          <FastImage
            style={styles.postImage}
            source={{
              // @ts-ignore
              uri,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View> : <Text>{JSON.stringify(uri)}</Text> : <></> }
      </ScrollView>

      <Appbar style={styles.bottomBar}>
        <Appbar.Action
          icon="image"
          onPress={() => setImageModalVisible(true)}
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
          onPress={submitHandler}>
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
      <ImageModal
          setLoading={setImageLoading}
          setUri={setUri}
          setVisible={setImageModalVisible}
          setImageData={setImageData}
          visible={imageModalVisible}

        />
    </View>
  );
}
