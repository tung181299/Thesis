import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const width = Dimensions.get('window').width;

function CarouselCustom({data}) {
  const [activeSlide, setActiveSlide] = useState(null);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{}}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  _renderItem = item => {
    return (
      <View style={styles.slide}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carousel}>
      <Carousel
        data={data}
        renderItem={({item}) => _renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay={true}
        loop={true}
      />
      {pagination()}
    </View>
  );
}

export default CarouselCustom;
