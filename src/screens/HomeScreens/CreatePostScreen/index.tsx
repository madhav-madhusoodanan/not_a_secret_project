import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  Modal,
  Portal,
  Button,
  Chip,
  List,
  Snackbar,
  Appbar,
} from 'react-native-paper';
import {showMessage} from 'react-native-flash-message';
import axios from '../../../constants/api';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import ImageModal from '../../../components/Profile/ImageModal';
import {newPost} from '../../../store/Actions/PostActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreatePostBottomSheetContent({}) {
  const {user} = useSelector((state: any) => state.Auth);
  const {loading} = useSelector((state: any) => state.Post);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [community, setCommunity] = useState({
    _id: null,
    name: 'Select a community',
    id: null,
  });
  const [names, setNames] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [uri, setUri] = useState(null);

  // snackbar
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onToggleSnackBar = () => setVisibleSnackBar(!visible);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const submitHandler = () => {
    const data = new FormData();
    if (!community._id) {
      showMessage({
        message: 'Please Select a community',
        type: 'danger',
      });
      return;
    }
    // @ts-ignore
    const values = {description: message, community: community._id};
    if (imageData && uri) {
      data.append('file', imageData);
    }
    for (let item in values) {
      data.append(item, values[item]);
    }
    dispatch(newPost(data, navigate, showMessage));
  };

  const fetchCommunities = async () => {
    const token = await AsyncStorage.getItem('verseAuthToken');
    console.log(token);
    const {data} = await axios.get('/api/v1/communities?select=name', {
      headers: {Authorization: `Bearer ${token}`},
    });
    setNames(data.data);
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={styles.modalContainerStyle}>
          <Text style={styles.modalCommunityTitle}>Select Community</Text>
          <View style={styles.listGroup}>
            <FlatList
              data={names}
              renderItem={({item}) => (
                <RNBounceable
                  bounceEffect={0.8}
                  onPress={() => {
                    setCommunity(item);
                    setVisible(false);
                  }}>
                  <List.Item
                    // @ts-ignore
                    title={`${item.name}`}
                    titleStyle={styles.communityTitleStyle}
                    style={styles.communityListItem}
                  />
                </RNBounceable>
              )}
              // @ts-ignore
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Modal>
      </Portal>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.customListView}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar.uri,
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <Text style={{fontSize: 16, fontFamily: 'Inter-SemiBold'}}>
                {user.firstName} {user.lastName}
              </Text>
            </View>
            <View style={styles.extraInfoWrapper}>
              <Chip icon="chevron-down" onPress={() => setVisible(true)}>
                {/* @ts-ignore */}
                {community ? community.name : 'Select a community'}
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
        {uri ? (
          !imageLoading ? (
            <View style={styles.imageContainer}>
              <TouchableOpacity
                onPress={() => setUri(null)}
                activeOpacity={0.5}
                style={styles.touchableOpacity}>
                <List.Icon
                  color={'black'}
                  icon="close"
                  style={styles.listIcon}
                />
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
            </View>
          ) : (
            <Text>{JSON.stringify(uri)}</Text>
          )
        ) : (
          <></>
        )}
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
          disabled={loading}
          loading={loading}
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
