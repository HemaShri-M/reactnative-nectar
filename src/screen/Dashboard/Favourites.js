import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {FindProducts} from '../../constants/FindProducts';
import {Groceries} from '../../constants/Groceries';
import {MeatFish} from '../../constants/MeatFish';
import {BestSelling} from '../../constants/BestSelling';
export default function MyCart() {
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
                // display: 'flex',
                // flexDirection: 'column',
                //justifyContent: 'space-around',
                marginBottom: 10,
                marginTop: 20,
                marginLeft: 20,
                alignContent: 'center',
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
                  <Text
                    style={{
                      fontFamily: 'Gilroy-Medium',
                      fontSize: 14,
                      lineHeight: 18,
                      // marginTop: 120,
                      //marginRight: 40,
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
