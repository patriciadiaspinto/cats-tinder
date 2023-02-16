/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Star} from '../icons';

type ButtonToggleProps = PropsWithChildren<{
  id: string;
  onPress: () => void;
  checked: boolean;
}>;

const ButtonToggle = ({id, onPress, checked, children}: ButtonToggleProps) => {
  const justifyContentStyle = checked ? 'flex-start' : 'flex-end';
  return (
    <View style={{...styles.toggle, justifyContent: justifyContentStyle}}>
      <TouchableOpacity
        id={id}
        onPress={onPress}
        testID={id}
        style={styles.button}>
        {children || null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 24,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  toggle: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    width: 84,
    height: 28,
    borderRadius: 28,
    backgroundColor: '#E3E3E4',
    alignItems: 'center',
    margin: 20,
  },
});

export default ButtonToggle;
