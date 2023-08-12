import {StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import SearchBox from '../../components/Searchbox';
import {FindProducts} from '../../constants/FindProducts';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Explore() {
  const navigation = useNavigation();
  const Beverages = () => {
    onPress = navigation.navigate('Beverages');
    console.log('Button pressed!');
  };
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
            marginTop: 10,
            color: '#181725',
          }}>
          Find Products
        </Text>
        <SearchBox />
      </View>
      <Pressable style={{marginLeft: 15, marginRight: 15}}>
        <FlatList
          numColumns={2}
          horizontal={false}
          scrollEnabled={true}
          data={FindProducts}
          renderItem={({item}) => (
            <TouchableOpacity onPress={Beverages}>
              <View
                style={{
                  backgroundColor: item.color,
                  // marginLeft: 20,
                  marginHorizontal: 7,

                  padding: 16,
                  paddingBottom: 5,
                  marginTop: 10,
                  //justifyContent: 'space-around',
                  borderColor: '#E2E2E2',
                  borderWidth: 1,
                  borderRadius: 18,
                }}>
                <Image
                  // key={item.name}
                  source={item.source}
                  resizeMode="contain"
                  style={{
                    marginBottom: 20,
                    width: 111,
                    height: 74,
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
                    paddingBottom: 30,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
