import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import HomeScreen from './HomeScreen';
import {useNavigation} from '@react-navigation/native';

export default function OrderAccepted() {
  const navigation = useNavigation();
  const HomeScreen = () => {
    onPress = navigation.navigate('HomeScreen');
    console.log('Button pressed!');
  };
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Image
          source={require('../../../src/assets/images/orderaccept.png')}
          style={{
            width: 269,
            height: 240,
            marginLeft: 15,
            marginTop: 90,
          }}></Image>
        <Text
          style={{
            fontFamily: 'Gilroy-Regular',
            fontSize: 26,
            fontWeight: 600,
            lineHeight: 30,
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 50,
            color: '#181725',
          }}>
          Your Order has been accepted
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            lineHeight: 21,
            letterSpacing: 0,
            textAlign: 'center',
            color: '#7C7C7C',
            marginTop: 10,
          }}>
          Your items has been placed and is on it’s way to being processed
        </Text>
      </View>
      <CustomButton title="Track Order" style={{marginTop: 40}} />
      <CustomButton title="Back to home" style={{}} onPress={HomeScreen} />
    </View>
  );
}

const styles = StyleSheet.create({});
