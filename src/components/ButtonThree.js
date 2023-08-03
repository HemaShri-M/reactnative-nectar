import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//const navigation = useNavigation();

const ButtonThree = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('')}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#FCFCFC',
              paddingLeft: 30,
            }}>
            f
          </Text>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A66AC',

    marginHorizontal: 30,
    borderRadius: 19,
    padding: 11,
    marginTop: 25,
  },
  buttonText: {
    color: '#FCFCFC',
    fontFamily: 'Gilroy',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0,
    //textAlign: 'center',
    paddingLeft: 25,
    paddingTop: 7,
  },
});

export default ButtonThree;
