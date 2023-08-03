import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
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

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
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
                marginTop: 30,
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
                  //alignSelf: 'left',

                  marginBottom: 50,
                  marginTop: 15,
                  padding: 10,
                  //marginVertical: 20,
                  marginLeft: 20,
                  marginRight: 30,
                  //backgroundColor: 'pink',
                }}>
                {ExclusiveOffer.map(item => (
                  <View style={{paddingRight: 30}}>
                    <Image
                      key={item.name}
                      source={item.source}
                      resizeMode="contain"
                      style={{
                        marginBottom: 5,
                        //marginLeft: 10,
                      }}></Image>
                    <Text
                      style={{
                        fontFamily: 'Gilroy-Bold',
                        fontSize: 16,
                        lineHeight: 18,
                        letterSpacing: 0.1,
                        textAlign: 'left',
                        color: '#181725',
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
                  marginBottom: 50,
                  marginTop: 15,
                  marginLeft: 20,
                }}>
                {BestSelling.map(item => (
                  <View style={{paddingRight: 40}}>
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
                      marginLeft: 20,
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
            <View
              style={{
                //marginTop: 10,
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
                Meat&Fish
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#53B175',

                    marginLeft: 200,
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
                  marginBottom: 50,
                  marginTop: 15,
                  marginLeft: 20,
                }}>
                {MeatFish.map(item => (
                  <View style={{paddingRight: 40}}>
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
