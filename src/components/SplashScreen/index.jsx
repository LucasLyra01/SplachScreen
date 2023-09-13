import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const animationRef = useRef();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/cadeado.json')}
        autoPlay
        loop={false}
        style={{flex: 1}}
        onAnimationFinish={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  animation: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default SplashScreen;
