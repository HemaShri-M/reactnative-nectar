import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import SubmitButton from '../../components/SubmitButton';

export default function Location() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../src/assets/images/bgimage.png')}
        style={{
          width: 'auto',
          height: 170,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/arrow.png')}
            style={{
              // marginRight: 20,
              marginTop: 10,
              marginLeft: 20,
            }}
            onPress={() => navigation.goBack('Number')}></Image>
        </TouchableOpacity>
        <Image
          source={require('../../../src/assets/images/location.png')}
          style={{
            marginTop: 25,
            marginHorizontal: 65,
          }}></Image>
      </ImageBackground>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 26,
            fontWeight: 600,
            lineHeight: 25,
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 85,

            color: '#181725',
          }}>
          Select Your Location
        </Text>
        <Text
          style={{
            color: '#7C7C7C',
            marginTop: 40,
            textAlign: 'center',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
          }}>
          Swithch on your location to stay in tune with what’s happening in your
          area
        </Text>
        <View
          style={{
            marginLeft: 25,
            marginTop: 80,
            marginRight: 25,
          }}>
          <Text
            style={{
              color: '#7C7C7C',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 29,
              letterSpacing: 0,
              textAlign: 'left',
            }}>
            Your Zone
          </Text>
          <View>
            <TouchableOpacity style={styles.numberbox}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#181725',
                  //marginLeft: 0,
                }}>
                Banasree
              </Text>
              <Image
                source={require('../../../src/assets/images/downarrow.png')}
                style={{
                  marginLeft: 215,
                }}></Image>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#7C7C7C',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 29,
              letterSpacing: 0,
              textAlign: 'left',
              marginTop: 20,
            }}>
            Your Area
          </Text>
          <View>
            <TouchableOpacity style={styles.numberbox}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#B1B1B1',
                }}>
                Types of your area
              </Text>
              <Image
                source={require('../../../src/assets/images/downarrow.png')}
                style={{
                  marginLeft: 150,
                }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <SubmitButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  numberbox: {
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderRadius: 3,

    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
});
