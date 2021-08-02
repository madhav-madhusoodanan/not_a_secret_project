/* eslint-disable react/display-name */

import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import ProfileHeader from './../../components/ProfileHeader';
import {FlatFeed} from 'react-native-activity-feed';
import EdirProfileButton from './../../components/Buttons/EditProfileButton';

export const navigationOptions = ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerRight: () => (
    <EdirProfileButton
      pressed={() => console.log('Edit Button Pressed')}
      style={{marginRight: 10}}>
      Edit Profile
    </EdirProfileButton>
  ),
  headerTransparent: true,
  headerBackTitle: null,
});

// TODO: Convert to FC
export default class ProfileScreen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ProfileHeader />
        <FlatFeed feedGroup="user" />
      </ScrollView>
    );
  }
}
