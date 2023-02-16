/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';

import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  ButtonIcon,
  ButtonToggle,
  Card,
  Cross,
  Flame,
  Heart,
  Navbar,
  Star,
} from './app/components';
import Swiper from 'react-native-deck-swiper';
import {getAllCatImages, postCatVote} from './app/apiRequests/CatsData';

const {width, height} = Dimensions.get('window');

function App(): JSX.Element {
  const [page, setPage] = useState('HOME');
  const [cardIndex, setCardIndex] = useState(0);
  const swiperRef: any = useRef(null);
  const [cats, setCats] = useState<any>([]);

  useEffect(() => {
    getAllCatImages().then(response => {
      if (response) {
        setCats(response);
      }
    });
  }, []);

  const onSwipe = (direction: string) => {
    if (direction === 'right') postCatVote({id: cats[cardIndex].id, value: 1});
    setCardIndex(cardIndex + 1);
  };

  const onPress = (direction: string) => {
    if (swiperRef.current && direction === 'left')
      swiperRef.current.swipeLeft(cardIndex);
    else swiperRef.current.swipeRight(cardIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={cats}
        renderCard={card => {
          return <Card data={card}></Card>;
        }}
        onSwipedRight={() => onSwipe('right')}
        onSwipedLeft={() => onSwipe('left')}
        cardIndex={cardIndex}
        backgroundColor={'white'}
        stackSize={1}
      />
      <ButtonToggle
        id={'toggle'}
        onPress={() => setPage(page === 'HOME' ? 'FAVS' : 'HOME')}
        checked={page === 'HOME'}>
        {page === 'HOME' ? <Flame /> : <Star />}
      </ButtonToggle>
      <View style={styles.footer}>
        <View style={styles.buttonsWrapper}>
          <ButtonIcon id={'icon'} onPress={() => onPress('left')}>
            <Cross />
          </ButtonIcon>
          <ButtonIcon id={'icon'} onPress={() => onPress('right')}>
            <Heart />
          </ButtonIcon>
        </View>
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: width,
    height: height,
    alignItems: 'center',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
    width: 154,
    gap: 48,
  },
  footer: {
    position: 'absolute',
    bottom: 32,
  },
});

export default App;
