import {jest} from '@jest/globals';

jest.mock('react-native-deck-swiper', () => {
  const React = require('react');
  const {View} = require('react-native');
  const MockSwipe = () => {
    return <View />;
  };

  return {
    __esModule: true,
    default: MockSwipe,
  };
});
