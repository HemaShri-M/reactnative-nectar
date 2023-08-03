import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import SearchBox from '../../components/Searchbox';
import {FindProducts} from '../../constants/FindProducts';
import {ScrollView} from 'react-native-gesture-handler';

export default function Explore() {
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
            marginTop: 10,
            color: '#181725',
          }}>
          Find Products
        </Text>
        <SearchBox />
      </View>
      <FlatList
        numColumns={2}
        horizontal={false}
        scrollEnabled={true}
        data={FindProducts}
        renderItem={({item}) => (
          <View
            style={{
              //backgroundColor: 'pink',
              marginLeft: 20,
              marginHorizontal: 45,
              padding: 5,
              marginTop: 40,
              marginBottom: 10,
              justifyContent: 'space-around',
            }}>
            <Image
              // key={item.name}
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
                textAlign: 'center',
                color: '#181725',
                marginTop: 10,
              }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
