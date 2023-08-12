import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import OrderAccepted from './OrderAccepted';
import {useNavigation} from '@react-navigation/native';

export default function CheckOut() {
  const navigation = useNavigation();
  // const OrderAccepted = () => {
  //   onPress = navigation.navigate('OrderAccepted');
  //   console.log('Button pressed!');
  // };
  const [openModal, setOpenModal] = useState(false);
  const HomeScreen = () => {
    onPress = navigation.navigate('HomeScreen');
    console.log('Button pressed!');
  };

  function renderModal() {
    return (
      <Modal
        style={{backgroundColor: 'white'}}
        transparent={true}
        visible={openModal}
        animationType="slide">
        <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <Image
              source={require('../../../src/assets/images/orderaccept.png')}
              style={{
                width: 269,
                height: 240,
                marginLeft: 15,
                marginTop: 90,
              }}></Image>
            <Text
              style={{
                fontFamily: 'Gilroy-Regular',
                fontSize: 26,
                fontWeight: 600,
                lineHeight: 30,
                letterSpacing: 0,
                textAlign: 'center',
                marginTop: 50,
                color: '#181725',
              }}>
              Your Order has been accepted
            </Text>
            <Text
              style={{
                fontFamily: 'Gilroy-Medium',
                fontSize: 16,
                lineHeight: 21,
                letterSpacing: 0,
                textAlign: 'center',
                color: '#7C7C7C',
                marginTop: 10,
              }}>
              Your items has been placed and is on it’s way to being processed
            </Text>
          </View>
          <CustomButton title="Track Order" style={{marginTop: 40}} />
          <CustomButton title="Back to home" style={{}} onPress={HomeScreen} />
        </View>
      </Modal>
    );
  }
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 22,
              fontWeight: 600,
              lineHeight: 24,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
            }}>
            CheckOut
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/close1.png')}
              style={{width: 15, height: 15, marginTop: 4}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#7C7C7C',
            }}>
            Delivery
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 20,
              letterSpacing: 0,
              color: '#181725',
              marginTop: 2,
              marginLeft: 130,
            }}>
            Select Method
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/rightarrow.png')}
              style={{
                width: 8,
                height: 14,
                marginTop: 6,
                marginLeft: 15,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#7C7C7C',
            }}>
            Payment
          </Text>
          <Image
            source={require('../../../src/assets/images/card.png')}
            style={{
              width: 21,
              height: 16,
              marginTop: 6,
              marginLeft: 203,
            }}></Image>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/rightarrow.png')}
              style={{
                width: 8,
                height: 14,
                marginTop: 6,
                marginLeft: 15,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#7C7C7C',
            }}>
            Promo Code
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 20,
              letterSpacing: 0,
              color: '#181725',
              marginTop: 2,
              marginLeft: 97,
            }}>
            Pick discount
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/rightarrow.png')}
              style={{
                width: 8,
                height: 14,
                marginTop: 6,
                marginLeft: 15,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#7C7C7C',
            }}>
            Total Cost
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 20,
              letterSpacing: 0,
              color: '#181725',
              marginTop: 2,
              marginLeft: 160,
            }}>
            $13.97
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/rightarrow.png')}
              style={{
                width: 8,
                height: 14,
                marginTop: 6,
                marginLeft: 15,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            //marginLeft: 85,
          }}>
          <Text
            style={{
              color: '#7C7C7C',
            }}>
            By placing an order you agree to our
          </Text>

          <TouchableOpacity style={{}}>
            <Text
              style={{
                color: '#181725',
                paddingLeft: 5,
              }}>
              Terms
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            //marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            // marginLeft: 85,
          }}>
          <Text
            style={{
              color: '#7C7C7C',
            }}>
            And
          </Text>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                color: '#181725',
                paddingLeft: 5,
              }}>
              Conditions.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton
        title="Place Order"
        style={{marginTop: 20}}
        onPress={() => setOpenModal(true)}
      />
      {renderModal()}
      {/* </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({});
