import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import CrossIcon from '@iconscout/react-native-unicons/icons/uil-times';

type Props = Pick<ViewProps, 'style'> & {name: string};

const HeaderOverlay = () => {
  const containerStyle = useMemo(() => [styles.container], []);

  return (
    <View style={containerStyle}>
      {/* <CrossIcon size="30" color="#000" /> */}
      <Text style={styles.title}>JEE Mentorship</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    // alignSelf: 'center',
    fontFamily: 'Inter-Bold',
  },
});

export default memo(HeaderOverlay);
