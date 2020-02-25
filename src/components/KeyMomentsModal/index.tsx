import React, {useState} from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';

import {isIphoneX} from '../../utils/isIphoneX';
import {KeyMoment} from '../../components';
import * as T from '../../styles/typography';
import styles from './styles';

const chevron = require('../../assets/chevron.png');

interface Props {
  handlePress: (index: number) => void;
}

const KeyMomentsModal = ({handlePress}: Props) => {
  const [showModal, setShowModal] = useState(true);
  const [yValue] = useState(new Animated.Value(isIphoneX() ? 120 : 140));
  const [animatedValue] = useState(new Animated.Value(180));

  const toggleModal = () => {
    flipAnimation();
    let toValue = isIphoneX() ? 120 : 140;
    if (showModal) {
      toValue = 0;
    }
    Animated.spring(yValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start();
    setShowModal(!showModal);
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const Rotate_Y_AnimatedStyle = {
    transform: [{rotateX: setInterpolate}],
  };

  const flipAnimation = () => {
    let toValue = 180;
    if (showModal) {
      toValue = 0;
    }
    Animated.spring(animatedValue, {
      toValue: toValue,
      tension: 10,
      friction: 8,
    }).start();
  };

  const onEventPress = (index: number) => {
    setTimeout(() => {
      toggleModal();
    }, 500);
    handlePress(index);
  };

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: yValue}]}]}>
      <View style={styles.header}>
        <T.H1 center>Key Moments</T.H1>
        <TouchableOpacity onPress={toggleModal} style={styles.iconContainer}>
          <Animated.Image
            source={chevron}
            style={[styles.icon, Rotate_Y_AnimatedStyle]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.keyMomentsContainer}>
        <KeyMoment
          minute={12}
          event={'Yellow Card'}
          handlePress={() => onEventPress(1)}
        />
        <KeyMoment
          minute={21}
          event={'Goal'}
          handlePress={() => onEventPress(4)}
        />
        <KeyMoment
          minute={28}
          event={'Save'}
          handlePress={() => onEventPress(5)}
        />
        <KeyMoment
          minute={47}
          event={'Penalty'}
          handlePress={() => onEventPress(10)}
        />
      </View>
    </Animated.View>
  );
};

export default KeyMomentsModal;
