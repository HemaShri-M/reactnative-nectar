import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LogoutButton from '../../components/LogoutButton';

export default function Account() {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../src/assets/images/profile.png')}
            style={{
              borderRadius: 27,
              width: 58,
              height: 60,
              marginTop: 20,
            }}></Image>
          <View
            style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={{
                fontFamily: 'Gilroy-Bold',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: 0,
                textAlign: 'left',
                color: '#181725',
                marginTop: 35,
                fontWeight: 600,
              }}>
              Afsar Hossen{'  '}
              <Image
                source={require('../../../src/assets/images/pencil.png')}
                style={{}}></Image>
            </Text>
            <Text
              style={{
                fontFamily: 'Gilroy-Regular',
                fontSize: 14,
                lineHeight: 18,
                letterSpacing: 0,
                textAlign: 'left',
                color: '#7C7C7C',
                //marginTop: 50,
                marginBottomWidth: 1,
                borderColor: '#E2E2E2',
              }}>
              Imshuvo97@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/Ordersicon.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 220,
            }}>
            Orders
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 15,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
          }}>
          <Image
            source={require('../../../src/assets/images/Mydetails.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 193,
            }}>
            My Details
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 1,
            paddingBottom: 15,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/Ordersicon.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 148,
            }}>
            Delivery Address
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/paymentmethod.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 138,
            }}>
            Payment Methods
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/Promo.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 178,
            }}>
            Promo Card
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/Bellicon.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 176,
            }}>
            Notifications
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/helpicon.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 235,
            }}>
            Help
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingTop: 15,
          }}>
          <Image
            source={require('../../../src/assets/images/abouticon.png')}
            style={{marginLeft: 20}}></Image>
          <Text
            style={{
              marginLeft: 20,
              fontfamily: ' Gilroy-Regular',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 223,
            }}>
            About
          </Text>

          <TouchableOpacity style={{}}>
            <Image
              source={require('../../../src/assets/images/Vector.png')}
              style={{
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <LogoutButton title="Log Out" />
    </View>
  );
}

const styles = StyleSheet.create({});
