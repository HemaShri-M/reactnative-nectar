import {StyleSheet, Text, View, FlatList, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {FindProducts} from '../../constants/FindProducts';
import {Groceries} from '../../constants/Groceries';
import {MeatFish} from '../../constants/MeatFish';
import {BestSelling} from '../../constants/BestSelling';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
export default function Favourites() {
  const navigation = useNavigation();

  // const transparent = 'rgba(0,0,0,0.5)';

  // const Error = () => {
  //   onPress = navigation.navigate('Error');
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
        <View
          style={{
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 130,
            borderRadius: 18,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/close1.png')}
              style={{
                marginTop: 15,
                marginLeft: 20,
                width: 15,
                height: 15,
              }}></Image>
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/error.png')}
            style={{
              marginTop: 20,
              marginLeft: 50,
              width: 222,
              height: 221,
            }}></Image>
          <Text
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 30,
              letterSpacing: 0,
              textAlign: 'center',
              color: '#181725',
              marginTop: 30,
            }}>
            Oops! Order Failed
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 21,
              letterSpacing: 0,
              textAlign: 'center',
              color: '#7C7C7C',
              marginTop: 15,
            }}>
            Something went tembly wrong.
          </Text>
          <CustomButton title="Please Try Again" style={{marginTop: 40}} />
          <CustomButton
            title="Back to Home"
            onPress={HomeScreen}
            style={{marginBottom: 10}}
          />
        </View>
      </Modal>
    );
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{}}>
        <Text
          style={{
            fontFamily: 'GilroyBold',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 20,
            color: '#181725',
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            paddingBottom: 20,
          }}>
          Favourites
        </Text>
      </View>
      <View style={{}}>
        <FlatList
          horizontal={false}
          scrollEnabled={true}
          data={BestSelling}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 10,
                marginTop: 20,
                marginLeft: 20,
                alignContent: 'center',
                borderBottomWidth: 1,
                borderColor: '#E2E2E2',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  key={item.name}
                  source={item.source}
                  resizeMode="contain"
                  style={{
                    marginBottom: 5,
                  }}></Image>
                <View style={{display: 'flex', flexDirection: 'column'}}>
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
                  <TouchableOpacity>
                    <Image
                      source={require('../../../src/assets/images/backarrow.png')}
                      style={{
                        marginLeft: 230,
                        //backgroundColor: 'pink',
                      }}></Image>
                  </TouchableOpacity>
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
                </View>
              </View>
            </View>
          )}
        />
        <CustomButton
          title="Add All To Cart"
          style={{marginTop: 130}}
          onPress={() => setOpenModal(true)}
        />

        {renderModal()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
