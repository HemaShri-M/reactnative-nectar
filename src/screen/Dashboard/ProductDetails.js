import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
//const [openModal, setOpenModal] = useState(false);

export default function ProductDetails() {
  return (
    // <Modal
    //   style={{backgroundColor: 'white'}}
    //   transparent={true}
    //   visible={openModal}
    //   animationType="slide">
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <View
        style={{
          backgroundColor: '#F2F3F2',
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/frontarrow.png')}
              style={{
                width: 10,
                height: 18,
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/export.png')}
              style={{
                width: 18,
                height: 18,
                marginTop: 20,
                marginRight: 20,
                marginLeft: 20,
              }}></Image>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../../src/assets/images/apple1.png')}
          style={{width: 329, height: 199, marginBottom: 40}}></Image>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: 22,
              lineHeight: 22,
              letterSpacing: 0.1,
              textAlign: 'left',
              marginTop: 20,
              color: '#181725',
            }}>
            Naturel Red Apple
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/heart.png')}
              style={{width: 24, height: 24, marginTop: 20}}></Image>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 14,
            lineHeight: 18,

            textAlign: 'left',
          }}>
          1kg, Price
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 30,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/minus1.png')}
              style={{
                width: 17,
                height: 2,
                marginTop: 20,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/numberbox.png')}
            style={{width: 45, height: 45}}></Image>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/plus2.png')}
              style={{
                width: 17,
                height: 17,
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,
              }}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Gilroy-Bold',
              fontWeight: 600,
              fontSize: 18,
              lineHeight: 18,
              letterSpacing: 0.1,
              textAlign: 'left',
              marginTop: 15,
              color: '#181725',
              marginLeft: 150,
            }}>
            $4.99
          </Text>
        </View>
        <View style={{borderTopWidth: 1, borderColor: '#E2E2E2'}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginTop: 15,
            }}>
            Product Detail
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 13,
              lineHeight: 21,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#7C7C7C',
              marginTop: 5,
              borderBottomWidth: 1,
              borderColor: '#E2E2E2',
              paddingBottom: 15,
            }}>
            Apples are nutritious. Apples may be good for weight loss. apples
            may be good for your heart. As part of a healtful and varied diet.
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 190,
            }}>
            Nutritions
          </Text>
          <Image
            source={require('../../../src/assets/images/gram.png')}
            style={{width: 33, height: 18}}></Image>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/backarrow.png')}
              style={{
                width: 8,
                height: 15,
                marginLeft: 20,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 15,
            borderTopWidth: 1,
            borderColor: '#E2E2E2',
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginRight: 150,
              marginTop: 10,
            }}>
            Review
          </Text>
          <Image
            source={require('../../../src/assets/images/stars.png')}
            style={{width: 92, height: 14, marginTop: 10}}></Image>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/backarrow.png')}
              style={{
                width: 8,
                height: 15,
                marginLeft: 20,
                marginTop: 10,
              }}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({});
