/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Message, Paw, User} from '../icons';

const Navbar = () => {
  return (
    <View style={[styles.navbar, styles.shadow]} testID={'navbar-container'}>
      <TouchableOpacity onPress={() => console.log('navigate home')}>
        <Paw />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('navigate messages')}>
        <Message />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('navigate profile')}>
        <User />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    width: 156,
    borderRadius: 25,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  shadow: {
    shadowColor: '#52006A',
    ...Platform.select({
      ios: {
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

export default Navbar;
