import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = ({data}: any) => {
  return (
    data && (
      <View style={[styles.photoWrapper, styles.shadow]} testID={'container'}>
        <Image source={{uri: data.url}} style={[styles.photo]} />
        {data.breeds?.length > 0 ? (
          <View style={styles.dataWrapper}>
            <View style={styles.data}>
              <Text style={styles.dataFont} testID={'name'}>
                {data.breeds[0].name}
              </Text>
              <Text style={styles.dataFont} testID={'life_span'}>
                {data.breeds[0].life_span}
              </Text>
            </View>
            <Text style={styles.description} testID={'origin'}>
              {data.breeds[0].origin}
            </Text>
          </View>
        ) : null}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#52006A',
    ...Platform.select({
      ios: {
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  photo: {
    width: width * 0.9,
    height: height * 0.55,
    borderRadius: 16,
    position: 'relative',
  },
  photoWrapper: {
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 32,
  },
  dataWrapper: {
    display: 'flex',
    flexDirection: 'column',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '90%',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dataFont: {
    fontSize: 16,
    fontWeight: '700',
    color: '#434141',
  },
  description: {
    fontSize: 8,
    fontWeight: '700',
    color: '#BFBFC0',
    lineHeight: 10,
  },
});

export default Card;
