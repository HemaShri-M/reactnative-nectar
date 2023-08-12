import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  RootTagContext,
  Image,
  Button,
  StatusBar,
} from 'react-native';
import React from 'react';
//import {SafeAreaProvider} from 'react-native-safe-area-context';

import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Onbording() {
  const navigation = useNavigation();
  const Signin = () => {
    onPress = navigation.navigate('Signin');
    console.log('Button pressed!');
  };
  return (
    <View style={{}}>
      <ImageBackground
        source={require('../../../src/assets/images/onbording.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={require('../../../src/assets/images/carrot.png')}
          style={{width: 48, height: 56, marginTop: 395, marginLeft: 160}}
        />
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 32,
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: 20,
            // marginBottom: 5,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 32,
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: 10,
          }}>
          to our store
        </Text>

        <Text
          style={{
            lineHeight: 16,
            fontSize: 16,
            textAlign: 'center',
            color: '#FCFCFCB2',
            marginTop: 10,
            marginBottom: 30,
          }}>
          Get your groceries in as fast as one hour
        </Text>

        <CustomButton title="Get Started" onPress={Signin} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
