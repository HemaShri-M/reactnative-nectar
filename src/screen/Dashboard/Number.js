import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';

export default function Number() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ImageBackground
        source={require('../../../src/assets/images/bgimage.png')}
        style={{
          width: 'auto',
          height: 170,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            marginLeft: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/arrow.png')}
              style={{
                // marginRight: 20,
                marginTop: 10,
              }}
              onPress={() => navigation.goBack('Signin')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 25,
              letterSpacing: 0,
              textAlign: 'left',
              marginTop: 45,

              color: '#181725',
            }}>
            Enter your mobile number
          </Text>
          <Text
            style={{
              color: '#7C7C7C',
              marginTop: 40,
            }}>
            Mobile Number
          </Text>
        </View>
      </ImageBackground>
      <TouchableOpacity>
        <TextInput
          style={styles.numberbox}
          placeholder="+880"
          //onPress={() => navigation.navigate('')}
          name="phone"
          onChangeText={text => setPhone(text)}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={10}
          value={phone}
          keyboardType="number-pad"
        />
        <Image
          source={require('../../../src/assets/images/Rectangle.png')}
          style={{
            width: 33,
            height: 23,
            marginBottom: 10,
            position: 'absolute',
            marginLeft: 20,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
        <View style={{marginTop: 210, marginLeft: 270}}>
          <Image
            source={require('../../../src/assets/images/round1.png')}
            style={{position: 'relative', width: 65, height: 65}}></Image>
          <Image
            source={require('../../../src/assets/images/Warrow.png')}
            style={{
              position: 'absolute',
              marginLeft: 28,
              marginTop: 25,
            }}></Image>
        </View>
      </TouchableOpacity>
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
    position: 'relative',
    marginLeft: 20,
    paddingBottom: 7,
    paddingLeft: 40,
    paddingTop: 1,
    color: 'black',
  },
});
