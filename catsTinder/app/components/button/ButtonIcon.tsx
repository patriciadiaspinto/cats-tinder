/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';

type ButtonIconProps = PropsWithChildren<{
  id: string;
  onPress: () => void;
}>;

const ButtonIcon = ({id, onPress, children}: ButtonIconProps) => {
  return (
    <TouchableOpacity
      id={id}
      onPress={onPress}
      testID={id}
      style={[styles.button, styles.shadow]}>
      {children || null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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

export default ButtonIcon;
