import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';

export default function Verification() {
  const navigation = useNavigation();
  const [code, setcode] = useState('');
  return (
    <View>
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
              onPress={() => navigation.goBack('Number')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 25,
              letterSpacing: 0,
              textAlign: 'left',
              marginTop: 45,

              color: '#181725',
            }}>
            Enter your 4-digit code
          </Text>
          <Text
            style={{
              color: '#7C7C7C',
              marginTop: 40,
            }}>
            Code
          </Text>
        </View>
      </ImageBackground>
      <TouchableOpacity>
        <TextInput
          style={styles.numberbox}
          placeholder="_  _  _  _"
          //onPress={() => navigation.navigate('')}
          name="phone"
          onChangeText={text => setcode(text)}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={4}
          value={code}
          keyboardType="number-pad"
        />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 210,
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 18,
              lineHeight: 29,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#53B175',
              //paddingTop: 15,
              // backgroundColor: 'pink',
              marginTop: 16,
              //marginRight: 150,
              //marginRight: 230,
            }}>
            Resend Code
          </Text>
        </TouchableOpacity>
        <View style={{marginRight: 20, marginLeft: 150}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Location')}
            style={{}}>
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
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  numberbox: {
    marginRight: 20,
    // display: 'flex',
    // flexDirection: 'row',
    // alignContent: 'flex-start',
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderRadius: 3,
    position: 'relative',
    marginLeft: 20,
    paddingBottom: 10,
    //paddingLeft: 40,
    paddingTop: 1,
    color: 'black',
  },
});
