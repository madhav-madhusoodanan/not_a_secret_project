import React from 'react'
import { StyleSheet } from 'react-native'
import ProfileTop from '../../../components/Profile/ProfileTop';
import Spinner from '../../../components/Spinner';
import {styles} from '../../HomeScreens/ProfileScreen/styles' 
import { useDispatch, useSelector} from 'react-redux';
import { getProfile } from '../../../store/Actions/UserActions';
import { useRoute, useNavigation } from '@react-navigation/core';
import { EMPTY_PROFILE } from '../../../store/types'

const inlineStyle = StyleSheet.create({
  text: {...styles.text, fontSize: 20},
  tag: {...styles.text, color: '#333', fontSize: 14},
  label: {...styles.text, ...styles.subText},
});
const PeerProfileScreen = () => {
  const { profile, loading } = useSelector((state: any) => state.User)
  const [ pageLoading, setPageLoading ] = React.useState(true)
  const navigation = useNavigation()
  const route = useRoute()
  const { user } = useSelector((state: any) => state.Auth)
  const dispatch = useDispatch()
  const loadProfile = async () => {
    // @ts-ignore
    await dispatch(getProfile(route.params.id))
    setPageLoading(false)
  }
  React.useEffect(() => {
    // @ts-ignore
    navigation.setOptions({ title: route.params.username })
    loadProfile()
    return () => {
      dispatch({ type: EMPTY_PROFILE })
    }
  },[])
  return (
    <>
      {!loading && profile || !pageLoading ? (
        <>
        <ProfileTop
          inlineStyle={inlineStyle}
          navigateToEditScreen={() => {}}
          styles={styles}
          user={profile}
          id={user._id}
        />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default PeerProfileScreen
