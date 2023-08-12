import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import ButtonTwo from '../../components/ButtonTwo';
import ButtonThree from '../../components/ButtonThree';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function Signin() {
  const navigation = useNavigation();
  //const [phone, setPhone] = useState('');
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ImageBackground
        source={require('../../../src/assets/images/number.png')}
        style={{
          width: 'auto',
          height: 270,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}></ImageBackground>

      <View style={{marginLeft: 20}}>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 25,
            letterSpacing: 0,
            textAlign: 'left',
            color: '#030303',
            marginTop: 40,
            marginBottom: 20,
          }}>
          Get your groceries{'\n'} with nectar
        </Text>

        <TouchableOpacity
          style={styles.numberbox}
          onPress={() => navigation.navigate('Number')}>
          <Image
            source={require('../../../src/assets/images/Rectangle.png')}
            style={{
              width: 33,
              height: 23,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              paddingLeft: 10,
              paddingTop: 2,
            }}>
            +880
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: 'Gilroy',
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 17,
          letterSpacing: 0,
          textAlign: 'center',
          marginTop: 35,
        }}>
        Or connect with social media
      </Text>
      <ButtonTwo />
      <ButtonThree />
    </View>
  );
}

const styles = StyleSheet.create({
  numberbox: {
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderRadius: 3,
  },
});
