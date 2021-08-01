import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';

import {styles} from './styles';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeFeedScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [Goal, setGoal] = React.useState('');
  const [isOpen, setOpen] = React.useState(false);

  const onPressItemHandler = value => {
    setGoal(value);
    setOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#00AAFF']}
            progressBackgroundColor={'#f8f9fa'}
            onRefresh={onRefresh}
          />
        }>
        <Headline style={styles.headline}>Welcome 👋</Headline>

        <Menu
          visible={isOpen}
          onDismiss={() => setOpen(false)}
          anchor={
            <TouchableOpacity
              style={styles.pickerButton}
              onPress={() => setOpen(true)}>
              {/* <Text style={[styles.pickerButtonActiveText]}>{Goal}</Text> */}
              <Text style={[styles.pickerButtonActiveText]}>IIT-JEE 🧑‍🔬</Text>
              <SVGIcon
                style={[styles.pickerButtonMenuIcon]}
                height={25}
                type="drop-down"
                width={25}
              />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => onPressItemHandler('IIT-JEE 🧑‍🔬')}
            title="IIT-JEE"
          />
          <Menu.Item
            disabled={true}
            onPress={() => onPressItemHandler('NEET 💊')}
            title="NEET"
          />
          <Menu.Item
            disabled={true}
            onPress={() => onPressItemHandler('CAT 💹')}
            title="CAT"
          />
        </Menu>
        <Button
          mode="contained"
          onPress={() => console.log('Button Pressed')}
          style={{
            width: '50%',
            marginVertical: 20,
          }}>
          Hello
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
