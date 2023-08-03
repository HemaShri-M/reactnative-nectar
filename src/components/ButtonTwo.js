import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//const navigation = useNavigation();

const ButonTwo = () => {
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
            G
          </Text>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5383EC',

    marginHorizontal: 30,
    borderRadius: 19,
    padding: 11,
    marginTop: 35,
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

export default ButonTwo;
