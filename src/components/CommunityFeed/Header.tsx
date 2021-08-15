import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Header = () => (
  <>
    <Text style={styles.title}>JEE Mentoship 2021</Text>
    <Text style={styles.subtitle}>by Nishant Jindal</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 4,
    // backgroundColor: 'pink',
  },
  subtitle: {
    fontSize: 12,
    paddingHorizontal: 2,
    // backgroundColor: 'aquamarine',
  },
});
