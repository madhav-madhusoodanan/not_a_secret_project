import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Colors, List, Subheading, ActivityIndicator} from 'react-native-paper';
import ProfileButton from '../Buttons/ProfileButton';
import ProfileInput from '../TextInput/ProfileInput';
import ImageModal from './ImageModal';

interface Props {
  styles: any;
  values: any;
  setValues: any;
  loading: any;
  updateHandler: any;
}
const EditProfileForm = ({
  styles,
  values,
  setValues,
  loading,
  updateHandler,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [uri, setUri] = useState(null);
  useEffect(() => {
    console.log('aavo', uri);
    setValues({...values, avatar: uri});
  }, [uri]);
  return (
    <KeyboardAvoidingView enabled>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.scrollStyle}>
        <View style={styles.viewOne}>
          <View style={styles.viewTwo}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              activeOpacity={0.5}
              style={styles.touchableOpacityOne}>
              <List.Icon
                color={Colors.black}
                icon="pencil"
                style={styles.listIconOne}
              />
            </TouchableOpacity>
            {imageLoading ? (
              <ActivityIndicator animating color="#000" />
            ) : (
              <FastImage
                style={styles.imageOne}
                source={{
                  uri: uri ? uri : values.avatar,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
          </View>
        </View>
        <ProfileInput
          label="First Name"
          value={values.firstName}
          onChange={val => setValues({...values, firstName: val})}
        />
        <ProfileInput
          label="Last Name"
          value={values.lastName}
          onChange={val => setValues({...values, lastName: val})}
        />
        <ProfileInput
          label="Username"
          onChange={val => setValues({...values, username: val})}
          value={values.username}
        />
        <View style={styles.content}>
          <Subheading style={styles.subHeading}>Bio</Subheading>
          <TextInput
            style={styles.editor}
            selectionColor={'#c8e7ff'}
            placeholderTextColor={'#adb5bd'}
            maxLength={300}
            multiline
            textBreakStrategy={'highQuality'}
            autoCompleteType={'off'}
            caretHidden={false}
            autoCapitalize="sentences"
            keyboardType="default"
            underlineColorAndroid="#BDBDBD"
            returnKeyType="next"
            value={values.bio}
            onChangeText={val => setValues({...values, bio: val})}
          />
        </View>
        <ProfileButton
          text="Save"
          submitHandler={updateHandler}
          loading={loading}
        />
        <ImageModal
          setLoading={setImageLoading}
          setUri={setUri}
          setVisible={setVisible}
          visible={visible}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({});
