import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        img={require('../../assets/forest.jpg')}
        score={3}
      />
      <ImageDetail
        title='Beach'
        img={require('../../assets/beach.jpg')}
        score={3}
      />
      <ImageDetail
        title='Mountain'
        img={require('../../assets/mountain.jpg')}
        score={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
