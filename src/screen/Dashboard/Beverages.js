import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Beverage} from '../../constants/Beverage';
import Filters from './Filters';
import {useNavigation} from '@react-navigation/native';

export default function Beverages() {
  const navigation = useNavigation();
  const Filters = () => {
    onPress = navigation.navigate('Filters');
    console.log('Button pressed!');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/frontarrow.png')}
            resizeMode="contain"
            style={{
              width: 10,
              height: 18,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'GilroyBold',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 20,
            color: '#181725',
          }}>
          Beverages
        </Text>
        <TouchableOpacity onPress={Filters}>
          <Image
            source={require('../../../src/assets/images/filter.png')}
            resizeMode="contain"
            style={{
              width: 16,
              height: 17,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        //horizontal={false}
        scrollEnabled={true}
        data={Beverage}
        renderItem={({item}) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              marginBottom: 10,
              marginTop: 25,
              marginLeft: 20,
              marginRight: 10,
            }}>
            <View
              style={{
                //marginHorizontal: 20,

                padding: 10,

                borderRadius: 18,
                borderWidth: 1,
                borderColor: '#E2E2E2',
              }}>
              <Image
                key={item.name}
                source={item.source}
                resizeMode="contain"
                style={{
                  marginBottom: 5,
                  marginLeft: 20,
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                }}></Image>
              <Text
                style={{
                  fontFamily: 'Gilroy-Bold',
                  fontSize: 16,
                  lineHeight: 18,
                  letterSpacing: 0.1,
                  textAlign: 'left',
                  color: '#181725',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 14,
                  lineHeight: 18,

                  textAlign: 'left',
                }}>
                {item.description}
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Gilroy-Bold',
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: 18,
                    letterSpacing: 0.1,
                    textAlign: 'left',
                    marginTop: 32,
                    color: '#181725',
                  }}>
                  {item.amount}
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require('../../../src/assets/images/plus1.png')}
                    resizeMode="contain"
                    style={{
                      //paddingTop: 15,
                      marginLeft: 30,
                      marginTop: 15,
                    }}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
