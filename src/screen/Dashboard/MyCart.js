import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {FindProducts} from '../../constants/FindProducts';
import {Groceries} from '../../constants/Groceries';
import {MeatFish} from '../../constants/MeatFish';
import CustomButton from '../../components/CustomButton';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CheckOut from './CheckOut';
import {useNavigation} from '@react-navigation/native';
export default function MyCart() {
  const navigation = useNavigation();
  const CheckOut = () => {
    onPress = navigation.navigate('CheckOut');
    console.log('Button pressed!');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
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
          My Cart
        </Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: '#E2E2E2', marginTop: 20}}>
        <FlatList
          horizontal={false}
          scrollEnabled={true}
          data={MeatFish}
          renderItem={({item}) => (
            <View
              style={{
                // marginBottom: 25,
                marginTop: 20,
                marginLeft: 20,
                alignContent: 'center',

                marginRight: 20,
                //padding: 5,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderColor: '#E2E2E2',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Image
                    key={item.name}
                    source={item.source}
                    resizeMode="contain"
                    style={{
                      // marginBottom: 5,
                      width: 107,
                      height: 67,

                      marginTop: 15,
                    }}></Image>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  {/* <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}> */}
                  <Text
                    style={{
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 16,
                      lineHeight: 18,
                      letterSpacing: 0.1,
                      textAlign: 'left',
                      color: '#181725',
                      marginLeft: 15,
                    }}>
                    {item.name}
                  </Text>

                  {/* <TouchableOpacity style={{}}>
                      <Image
                        source={require('../../../src/assets/images/close.png')}
                        style={
                          {
                            //marginRight: 20,
                          }
                        }></Image>
                    </TouchableOpacity> */}
                  {/* </View> */}
                  <Text
                    style={{
                      fontFamily: 'Gilroy-Medium',
                      fontSize: 14,
                      lineHeight: 18,

                      textAlign: 'left',
                      marginLeft: 14,
                    }}>
                    {item.description}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      //marginBottom: 40,
                    }}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../../src/assets/images/minus.png')}
                        style={{marginTop: 10, marginLeft: 10}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../../../src/assets/images/plus.png')}
                        style={{marginTop: 10, marginLeft: 40}}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <CustomButton title="Go to Checkout" onPress={CheckOut} style={{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
