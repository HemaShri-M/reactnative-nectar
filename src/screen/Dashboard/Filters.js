import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';
import CustomButton from '../../components/CustomButton';

export default function Filters() {
  const [isChecked, setIsChecked] = useState({
    eggs: false,
    noodles: false,
    chips: false,
    fastfood: false,
    collection: false,
    cocola: false,
    ifad: false,
    kazifarmas: false,
  });

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/frontarrow.png')}
            resizeMode="contain"
            style={{
              width: 10,
              height: 18,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 20,
            color: '#181725',
            marginLeft: 100,
          }}>
          Filters
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F2F3F2',

          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          marginTop: 20,
          height: '100%',
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 22,
            fontWeight: 600,
            lineHeight: 25,
            letterSpacing: 0,
            textAlign: 'left',
            color: '#181725',
            marginLeft: 20,
            marginTop: 20,
          }}>
          Categories
        </Text>
        <View style={{}}>
          <CheckBox
            isChecked={isChecked.eggs}
            onClick={() => setIsChecked({...isChecked, eggs: !isChecked.eggs})}
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Eggs"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.eggs ? '#53B175' : '#181725',

              //textAlign: 'center',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.noodles}
            onClick={() =>
              setIsChecked({...isChecked, noodles: !isChecked.noodles})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Noodles & Pasta"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.noodles ? '#53B175' : '#181725',

              //textAlign: 'center',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.chips}
            onClick={() =>
              setIsChecked({...isChecked, chips: !isChecked.chips})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Chips & Crisps"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.chips ? '#53B175' : '#181725',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.fastfood}
            onClick={() =>
              setIsChecked({...isChecked, fastfood: !isChecked.fastfood})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Fast Food"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.fastfood ? '#53B175' : '#181725',

              //textAlign: 'center',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 22,
              fontWeight: 600,
              lineHeight: 25,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#181725',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Brand
          </Text>
          <CheckBox
            isChecked={isChecked.collection}
            onClick={() =>
              setIsChecked({...isChecked, collection: !isChecked.collection})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Individual Callection"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.collection ? '#53B175' : '#181725',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.cocola}
            onClick={() =>
              setIsChecked({...isChecked, cocola: !isChecked.cocola})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Cocola"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.cocola ? '#53B175' : '#181725',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.ifad}
            onClick={() => setIsChecked({...isChecked, ifad: !isChecked.ifad})}
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Ifad"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.ifad ? '#53B175' : '#181725',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CheckBox
            isChecked={isChecked.kazifarmas}
            onClick={() =>
              setIsChecked({...isChecked, kazifarmas: !isChecked.kazifarmas})
            }
            style={{marginTop: 20, marginLeft: 20}}
            rightText="Kazi Farmas"
            rightTextStyle={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              lineHeight: 19,
              letterSpacing: 0,
              color: isChecked.kazifarmas ? '#53B175' : '#181725',
            }}
            checkBoxColor="#B1B1B1"
            checkedCheckBoxColor="#53B175"
          />
          <CustomButton title="Apply Filter" style={{marginTop: 100}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
