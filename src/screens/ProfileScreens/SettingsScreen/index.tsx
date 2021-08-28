import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {ActivityIndicator, List} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SVGIcon} from './../../../components/SVGIcon';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logoutUser } from '../../../store/Actions/AuthActions';
import { useDispatch } from 'react-redux';

export default function index() {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const logoutPressHandler = () => {
    setLoading(true);
    setTimeout(async() => {
      // @ts-ignore
      await dispatch(logoutUser())
    }, 1500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listGroup}>
        <RNBounceable bounceEffect={0.97} onPress={() => {}}>
          <List.Item
            title="Privacy Policy"
            titleStyle={styles.titleStyle}
            style={styles.listItem}
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            left={() => (
              <List.Icon
                color="#45E5A2"
                icon={props => (
                  // @ts-ignore
                  <SVGIcon {...props} height={70} type="privacy" width={70} />
                )}
              />
            )}
          />
        </RNBounceable>

        <RNBounceable bounceEffect={0.97} onPress={() => {}}>
          <List.Item
            title="Report Bug"
            titleStyle={styles.titleStyle}
            style={styles.listItem}
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            left={() => (
              <List.Icon
                color="#71A1FF"
                icon={props => (
                  // @ts-ignore
                  <SVGIcon {...props} height={70} type="bug" width={70} />
                )}
              />
            )}
          />
        </RNBounceable>
        <RNBounceable bounceEffect={0.97} onPress={logoutPressHandler}>
            <List.Item
              title={!loading ? 'Logout' : 'Logging out'}
              titleStyle={styles.titleStyle}
              style={{...styles.listItem}}
              right={() => <List.Icon color="#000" icon="chevron-right" />}
              left={() => (
                <>
                {!loading ? <List.Icon
                  color="#FF5E5E"
                  icon={props => (
                    <SVGIcon
                      {...props}
                      fill={'transparent'}
                      height={70}
                      type="logout"
                      width={70}
                    />
                  )}
                /> : <ActivityIndicator size='small' />}
                </>
                )}
                />
                {loading ? <></> : <></>}
        </RNBounceable>
      </View>
      <View style={styles.footerText}>
        <Text style={styles.footerTextStyles}>1.0 (081721)</Text>
      </View>
    </SafeAreaView>
  );
}
