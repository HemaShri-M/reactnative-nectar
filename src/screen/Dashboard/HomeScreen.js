import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SearchBox from '../../components/Searchbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ExclusiveOffer} from '../../constants/ExclusiveOffer.js';
import {BestSelling} from '../../constants/BestSelling';
import {Groceries} from '../../constants/Groceries';
import {MeatFish} from '../../constants/MeatFish';
import {useNavigation} from '@react-navigation/native';
import ProductDetails from './ProductDetails';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const ProductDetails = () => {
    onPress = navigation.navigate('ProductDetails');
    console.log('Button pressed!');
  };

  return (
    <SafeAreaProvider style={{flex: 1, marginTop: insets.top}}>
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <ScrollView horizontal={false}>
          <Image
            source={require('../../../src/assets/images/colorcarrot.png')}
            style={{
              width: 30,
              height: 35,
              marginTop: 10,
              marginLeft: 160,
            }}></Image>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              marginLeft: 100,
              marginTop: 5,
            }}>
            <Image
              source={require('../../../src/assets/images/location1.png')}></Image>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: 22,
                letterSpacing: 0,
                //textAlign: 'center',
                paddingLeft: 5,
                color: '#4C4F4D',
              }}>
              Dhaka, Banassre
            </Text>
          </View>
          <SearchBox />

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,

              marginTop: 20,
            }}>
            <ImageBackground
              source={require('../../../src/assets/images/bgimage1.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 120,

                // backgroundColor: 'pink',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontFamily: 'Aclonica',
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 23,
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: '#030303',
                  }}>
                  Fresh Vegetables
                </Text>
                <Text
                  style={{
                    fontFamily: 'Aclonica',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 18,
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: '#53B175',
                  }}>
                  Get Up To 40% OFF
                </Text>
              </View>
              <Image
                source={require('../../../src/assets/images/bgfruits.png')}
                resizeMode="contain"></Image>
            </ImageBackground>

            <View
              style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'row',
                marginRight: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#181725',
                }}>
                Exclusive Offer
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#53B175',

                    marginLeft: 165,
                  }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  marginBottom: 10,
                  marginTop: 15,
                }}>
                {ExclusiveOffer.map(item => (
                  <TouchableOpacity onPress={ProductDetails}>
                    {/* {openModal ? renderModal() : null} */}
                    {/* onPress={() => setOpenModal(true)} */}
                    <View
                      style={{
                        marginHorizontal: 7,

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
                          //marginLeft: 10,
                          width: 100,
                          height: 60,
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
                            style={{
                              //paddingTop: 15,
                              marginLeft: 30,
                              marginTop: 15,
                            }}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                marginRight: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#181725',
                }}>
                Best Selling
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#53B175',

                    marginLeft: 190,
                  }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 10,
                  marginTop: 15,
                  //marginLeft: 20,
                }}>
                {BestSelling.map(item => (
                  <View
                    style={{
                      marginHorizontal: 7,

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
                          style={{
                            //paddingTop: 15,
                            marginLeft: 30,
                            marginTop: 15,
                          }}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                marginRight: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#181725',
                }}>
                Groceries
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#53B175',

                    marginLeft: 205,
                  }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 30,
                  marginTop: 15,
                }}>
                {Groceries.map(item => (
                  <View
                    style={{
                      paddingRight: 40,
                      display: 'flex',
                      flexDirection: 'row',
                      //marginLeft: 15,
                      marginHorizontal: 7,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#E2E2E2',
                      backgroundColor: item.color,
                    }}>
                    <Image
                      key={item.name}
                      source={item.source}
                      resizeMode="contain"
                      style={{
                        marginBottom: 5,
                        marginLeft: 10,
                        width: 71,
                        height: 71,
                      }}></Image>
                    <Text
                      style={{
                        fontFamily: 'Gilroy-Bold',
                        fontSize: 16,
                        lineHeight: 18,
                        letterSpacing: 0.1,
                        marginTop: 30,
                        marginLeft: 10,
                        marginRight: 40,
                        color: '#181725',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>

            <ScrollView horizontal={true}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 50,
                  marginTop: 10,
                  // marginLeft: 20,
                }}>
                {MeatFish.map(item => (
                  <View
                    style={{
                      marginHorizontal: 7,
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
                        marginTop: 5,
                        width: 107,
                        height: 67,
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
                          style={{
                            marginTop: 15,
                            marginLeft: 30,
                          }}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
