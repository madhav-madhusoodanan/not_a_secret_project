import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Headline,
  Chip,
  Appbar,
} from 'react-native-paper';
import {styles} from './styles';

export default function CreatePostBottomSheetContent({}) {
  // modal initiation

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

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
              uri: 'https://pbs.twimg.com/profile_images/641822497457860608/zd6kUAag_400x400.png',
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <Text style={{fontSize: 16, fontFamily: 'Inter-SemiBold'}}>
                Eliz Rami
              </Text>
            </View>
            <View style={styles.extraInfoWrapper}>
              {/* <Button mode={'contained'}>Yo nigga</Button> */}
              <Chip onPress={showModal}>Nishant's Space</Chip>
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            height: '100%',
            marginTop: 20,
            marginBottom: 92,
            alignSelf: 'stretch',
            width: '100%',
            // backgroundColor: 'gray',
            // justifyContent: 'center',
          }}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="What are you thinking ?"
            multiline
            style={{
              ...styles.editor,
              fontSize: 18,
              textAlign: 'left',
              fontFamily: 'Lato-Regular',
              color: 'black',
            }}></TextInput>
        </ScrollView>
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
          icon="video"
          onPress={() => console.log('Pressed label')}
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
    </View>
  );
}
