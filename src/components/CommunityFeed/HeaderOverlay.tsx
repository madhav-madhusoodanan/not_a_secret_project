import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import AngleLeftIcon from '@iconscout/react-native-unicons/icons/uil-angle-left-b';

type Props = Pick<ViewProps, 'style'> & {name: string};

const HeaderOverlay = () => {
  const containerStyle = useMemo(() => [styles.container], []);

  return (
    <View style={containerStyle}>
      <AngleLeftIcon size="30" color="#000" />

      <Text style={styles.title}>JEE Mentorship</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    flex: 1,
    right: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
});

export default memo(HeaderOverlay);
