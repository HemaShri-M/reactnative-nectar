import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import HomeScreen from './HomeScreen';
import {useNavigation} from '@react-navigation/native';

export default function Error() {
  const navigation = useNavigation();
  const HomeScreen = () => {
    onPress = navigation.navigate('HomeScreen');
    console.log('Button pressed!');
  };
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <TouchableOpacity>
        <Image
          source={require('../../../src/assets/images/close1.png')}
          style={{
            marginTop: 20,
            marginLeft: 20,
            width: 15,
            height: 15,
          }}></Image>
      </TouchableOpacity>
      <Image
        source={require('../../../src/assets/images/error.png')}
        style={{
          marginTop: 20,
          marginLeft: 70,
          width: 222,
          height: 221,
        }}></Image>
      <Text
        style={{
          fontFamily: 'Gilroy-Bold',
          fontSize: 26,
          fontWeight: 600,
          lineHeight: 30,
          letterSpacing: 0,
          textAlign: 'center',
          color: '#181725',
          marginTop: 30,
        }}>
        Oops! Order Failed
      </Text>
      <Text
        style={{
          fontFamily: 'Gilroy-Medium',
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: 0,
          textAlign: 'center',
          color: '#7C7C7C',
          marginTop: 15,
        }}>
        Something went tembly wrong.
      </Text>
      <CustomButton title="Please Try Again" style={{marginTop: 40}} />
      <CustomButton title="Bact to Home" onPress={HomeScreen} />
    </View>
  );
}

const styles = StyleSheet.create({});
